import axios from "axios";
const BASE_URL = "https://api.nuxtjs.dev/rivers";

export default {
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}