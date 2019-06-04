import Auth from './auth'
import axios from 'axios'
const devBaseUrl = 'http://localhost:3000/v0'
const prodBaseUrl = 'https://api.cfpland.com/v0'

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

  getConferences(params) {
    return axios.get(`${this.baseUrl}/conferences`, {
      params,
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  getSavedConferences() {
    return axios.get(`${this.baseUrl}/me/conferences`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  putMeConference(conferenceId, action, data) {
    return axios.put(
      `${this.baseUrl}/me/conferences/${conferenceId}/${action}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
      }
    )
  }

  deleteMeConference(conferenceId, action) {
    return axios.delete(
      `${this.baseUrl}/me/conferences/${conferenceId}/${action}`,
      {
        headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
      }
    )
  }

  getMeSearches() {
    return axios.get(`${this.baseUrl}/me/searches`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  putMeSearch(data) {
    return axios.put(`${this.baseUrl}/me/searches`, data, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  deleteMeSearch(id) {
    return axios.delete(`${this.baseUrl}/me/searches/${id}`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  getMePayment() {
    return axios.get(`${this.baseUrl}/me/payment`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }
}
