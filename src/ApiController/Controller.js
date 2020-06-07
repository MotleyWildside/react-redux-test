import axios from "axios";

export default class Controller {
    static url = "http://localhost:8080";

    static get(route) {
        return axios.get(`${this.url}${route}`)
    }

    static post(route, body) {
        return axios.post(`${this.url}${route}`, body);
    }
}
