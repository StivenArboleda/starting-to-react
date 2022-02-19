import axios from 'axios'

let instance=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    AxiosInstance: 'json',
    header: {'X-Request-Width': 'XMLHttpRequest'}
})

export default instance;