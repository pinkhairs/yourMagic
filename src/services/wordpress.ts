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
        let headers: any = {'Content-type': 'application/json'}
        if (token) {
            headers = {'Content-type': 'application/json', 'Authorization': `Bearer ${token}`}
        }
        const response = await fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers,
            body: JSON.stringify(data)
        })
        return response.json()
    }
    getToken(data: object) {
        return this.request('jwt-auth/v1/token', data).then((response) => {
            if (response.token) {
                return storage.set('user', response)
            }
        })
    }
    getUser() {
        if (this.userToken) {
            this.request('jwt-auth/v1/token/validate', {}, this.userToken).then((response) => {
                if (response.data.status !== 200) {
                    this.logout()
                }
            })
        }
        return storage.get('user')
    }
    register(data: object) {
        return this.request('wp/v2/users/register', data, this.environmentToken).then((response) => {
            if (response.code === 200) {
                this.getToken(data)
            }
            return response.code === 200
        })
    }
    updateAccount(data: any) {
        return this.request('wp/v2/users/update', data).then((response) => {
            if (response.code === 200) {
                storage.set('user', {firstName: data.firstName, username: data.username, token: this.userToken, email: data.email})
            }
            return response.code === 200
        })
    }
    sendPasswordResetLink(data: any) {
        return this.request('wp/v2/users/forgot-password', data).then((response) => {
            return response.code === 200
        })
    }
    logout() {
        storage.clear().then(() => {
            router.replace('/onboarding')
        })
    }
}