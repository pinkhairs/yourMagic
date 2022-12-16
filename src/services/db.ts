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
    async request(path: string, data: any = {}, token = '', requestMethod = 'POST') {
        let headers: any = {'Content-Type': 'application/json'}
        if (token) {
            headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }
        const response = await fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers,
            body: data ? JSON.stringify(data) : null
        })
        return response.json()
    }
    getToken(data: object) {
        return this.request('jwt-auth/v1/token', data, this.environmentToken).then((response) => {
            console.log({response})
            return storage.set('user', response.data).then(() => {
                this.userToken = response.token
                return response.code === 'jwt_auth_valid_credential'
            })
        })
    }
    getUser() {
        return storage.get('user')
    }
    register(data: object) {
        return this.request('wp/v2/users/register', data, this.environmentToken).then((response) => {
            return this.getToken(data)
        })
    }
    updateAccount(data: any) {
        return this.request('wp/v2/users/update', data, this.userToken).then((response) => {
            if (response.code === 200) {
                return storage.set('user', {firstName: data.firstName, username: data.username, token: this.userToken, email: data.email, id: response.id})
            }
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
    loadAllSpreads() {
        return this.request('wp/v2/spreads/get', null, this.userToken, 'GET').then((response) => {
            return response
        })
    }
    getIndividualSpread(data: any) {
        return this.request('wp/v2/spreads/get/individual', data, this.userToken).then((response) => {
            console.log({response})
            return response
        })
    }
    getQuestions() {
        return storage.get('questions')
    }
    addQuestion(q: any) {
        return this.getQuestions().then((questions) => {
            if (questions) {
                questions.push(q)
                storage.set('questions', questions)
            } else {
                storage.set('questions', [q])
            }
        })
    }
}