import { environment } from "@/environments/environment";

export default new class {
    async request(path: string, data: object, requestMethod = 'POST', headers: any = {}) {
        await fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers: headers, 
            body: JSON.stringify(data)
        }).then(res => {
            return res.json()
        }).catch((err) => {
            return err
        });
    }
    token = (data: object) => {
        return this.request('jwt-auth/v1/token', data)
    }
    userIsLoggedIn = (token: string) => {
        console.log(this.token({}))
        return this.request('jwt-auth/v1/token/validate', {}, 'POST', {'Authorization': 'Bearer '+token})
    }
    register = (data: object) => {
        return this.request('users/register', data, 'POST')
    }
}