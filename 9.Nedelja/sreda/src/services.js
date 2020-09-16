import axios from 'axios'

export const getALlUsers = () => {
    return axios.get('https://reqres.in/api/users?page=2')
}