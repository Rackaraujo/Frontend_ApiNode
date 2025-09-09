import axios from 'axios'

//conexão com o back
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api