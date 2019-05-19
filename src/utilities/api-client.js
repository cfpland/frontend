import Auth from './auth'
import axios from 'axios'
const devBaseUrl = 'http://localhost:3000/v0'
const prodBaseUrl = 'https://cfpland-api.herokuapp.com/v0'

export default class ApiClient {
  isAuthenticated

  constructor() {
    this.baseUrl =
      process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl

    this.auth = new Auth()
    this.isAuthenticated = this.auth.isAuthenticated()
  }

  getMe() {
    return axios.get(`${this.baseUrl}/me`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  patchMe(data) {
    return axios.patch(`${this.baseUrl}/me`, data, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  getConferences() {
    return axios.get(`${this.baseUrl}/conferences`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  getSavedConferences() {
    return axios.get(`${this.baseUrl}/me/conferences`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }
}
