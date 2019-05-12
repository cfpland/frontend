import Auth from './auth'
import axios from 'axios'

export default class ApiClient {
  constructor() {
    this.baseUrl = 'http://localhost:3000/v0'
    this.auth = new Auth()
  }

  getMe() {
    return axios.get(`${this.baseUrl}/users/me`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }
}
