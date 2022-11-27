import { environment } from "@/environments/environment";

export default new class {
    request(path: string, data: object, requestMethod = 'GET') {
        return fetch(environment.apiUrl+path, {
            method: requestMethod,
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        }).then(res => {
            return res.json();
        }).then((res) => {
            console.log("Request complete!", res);
        }).catch((err) => {
            console.log('Error: ', err);
        });
    }
    token = (data: object) => {
        return this.request('jwt-auth/v1/token', data, 'POST')
    }
    userIsLoggedIn = (data: object) => {
        return this.request('jwt-auth/v1/token/validate', data, 'POST')
    }
    register = (data: object) => {
        return this.request('users/register', data, 'POST')
    }
}