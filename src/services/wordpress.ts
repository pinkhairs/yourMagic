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
        const headers = {'Content-type': 'application/json'}
        const response = await fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers,
            body: JSON.stringify(data)
        })
        return response.json()
    }
    getToken(data: object) {
        return this.request('jwt-auth/v1/token', data).then((response) => {
            console.log({response})
            if (response.token) {
                storage.set('user', response).then(() => {
                    router.replace('/')
                })
            }
        })
    }
    async userIsLoggedIn() {
        const response = await this.request('jwt-auth/v1/token/validate', {}, this.userToken);
        const user = await storage.get('user');
        return user;
    }
    register(data: object) {
        this.request('wp/v2/users/register', data, this.environmentToken).then((response) => {
            if (response.code === 200) {
                this.getToken(data)
            }
        })
    }
    updateAccount(data: object) {
        this.request('wp/v2/users/update', data).then((response) => {
            return response.code === 200
        })
    }
    logout() {
        storage.clear().then(() => {
            router.replace('/onboarding')
        })
    }
}