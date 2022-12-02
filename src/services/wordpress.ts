import { environment } from "@/environments/environment";
import router from "@/router";
import { Storage } from "@ionic/storage";

const storage = new Storage()

export default new class {
    private userToken = '';
    private environmentToken = environment.jwt

    constructor() {
        storage.create()
        storage.get('user').then((user) => {
            if (user) {
                this.userToken = user.token;
            }
        });
    }
    async request(path: string, data: object = {}, token = '', requestMethod = 'POST') {
        let headers: any = {'Content-Type': 'application/json'}
        if (token) {
            headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }
        const response = await fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers,
            body: JSON.stringify(data)
        })
        return response.json()
    }
    getToken(data: object) {
        return this.request('jwt-auth/v1/token', data, this.environmentToken).then((response) => {
            return storage.set('user', response.data).then(() => {
                this.userToken = response.token
                return response.code === 'jwt_auth_valid_credential'
            })
        })
    }
    getUser() {
        return this.request('jwt-auth/v1/token/validate', {}, this.userToken).then((response) => {
            return storage.get('user')
        })
    }
    register(data: object) {
        return this.request('wp/v2/users/register', data, this.environmentToken).then((response) => {
            return this.getToken(data)
        })
    }
    updateAccount(data: any) {
        return this.request('wp/v2/users/update', data, this.userToken).then((response) => {
            storage.set('user', {displayName: data.displayName, username: data.username, token: this.userToken, email: data.email})
            return response.data.statusCode === 200
        })
    }
    sendPasswordResetLink(data: any) {
        return this.request('wp/v2/users/forgot-password', data, this.environmentToken).then((response) => {
            return response.code === 200
        })
    }
    logout() {
        storage.clear().then(() => {
            router.replace('/onboarding')
        })
    }
}