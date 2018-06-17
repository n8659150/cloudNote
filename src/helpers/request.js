import axios from 'axios'

axios.defaults.baseURL = 'http://note-server.hunger-valley.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(url, method = 'GET', data = {}) {
    // 将get,post等提交方式的参数统一化，方便后续调用
    let option = {
        url,
        method,
        validateStatus(status) {
            return status >= 200 && status < 300; // 默认的
        }
    }
    method.toLowerCase() === 'get' ? (option.params = data) : (option.data = data);
    return axios(option);




}

