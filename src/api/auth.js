import axios from 'axios'

const API_HOST = 'http://51.15.70.153:8080'

export const getUserInfo = () =>
  // axios.get(`${API_HOST}/users/me`, { withCredentials: true})
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        result: 'ok',
        email: 'smena@project.ru',
        id: '1',
        firstName: 'Artem',
        lastName: 'Samofalov'
      })
    }, 1000)
  })
