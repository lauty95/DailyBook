import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAZDCj_CuYFlLQldyII30rk9cqntmRzj38'
    }
})

export default authApi