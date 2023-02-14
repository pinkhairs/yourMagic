import router from "@/router";
import { Storage } from "@ionic/storage";

const storage = new Storage()

export default new class {
    private userToken = '';
    private environmentToken = process.env.VUE_APP_JWTAPIKEY

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
        const response = await fetch(process.env.VUE_APP_BACKENDURL+path, {
            method: requestMethod,
            headers,
            body: data ? JSON.stringify(data) : null
        })
        return response.json()
    }
    getToken(data: object) {
        return this.request('jwt-auth/v1/token', data).then((response) => {
            storage.set('preferences', { notifications: true }) //TODO make pull setting from wp
            return storage.set('user', response.data).then(() => {
                return true
            })
        }).catch(() => {
            this.logout()
        })
    }
    getUser() {
        return storage.get('user')
    }
    register(data: object) {
        return this.request('wp/v2/users/register', data).then((response) => {
            return storage.set('preferences', { notifications: true })
        })
    }
    updateAccount(data: any) {
        return this.request('wp/v2/users/update', data, this.userToken).then((response) => {
            if (response.code === 200) {
                return storage.set('user', {firstName: data.firstName, username: data.username, token: this.userToken, email: data.email, id: response.id})
            }
        })
    }
    savePreference(data: any, userId: number) {
        return this.request('wp/v2/users/save-preference', {preferences: data, id: userId}, this.userToken).then((response) => {
            if (response.code === 200) {
                return storage.set('preferences', data)
            }
        })
    }
    saveReading(data: any) {
        return this.request('wp/v2/readings/save', data, this.userToken).then((response) => {
            if (response.code === 200) {
                storage.get('readings').then((readings) => {
                    if (readings) {
                        readings.push(data)
                        storage.set('readings', readings)
                    } else {
                        storage.set('readings', [data])
                    }
                })
            }
        })
    }
    getPreference(key: string) {
        return storage.get('preferences').then((preferences) => {
            return key in preferences ? preferences[key] : null
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
    loadAllSpreads() {
        return this.request('wp/v2/spreads/get', null, this.userToken, 'GET').then((response) => {
            return response
        })
    }
    loadAllCategories() {
        return this.request('wp/v2/library/get', null, this.userToken, 'GET').then((response) => {
            return response
        })
    }
    getIndividualSpread(data: any) {
        return this.request('wp/v2/spreads/get/individual', data, this.userToken).then((response) => {
            return response
        })
    }
    getIndividualCard(data: any) {
        return this.request('wp/v2/cards/get/individual', data, this.userToken).then((response) => {
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