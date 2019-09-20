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
    return axios.get(`${this.baseUrl}/me/saved-conferences`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  putSavedConference(conferenceId) {
    return axios.put(
      `${this.baseUrl}/me/saved-conferences/${conferenceId}`,
      undefined,
      {
        headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
      }
    )
  }

  deleteSavedConference(conferenceId) {
    return axios.delete(
      `${this.baseUrl}/me/saved-conferences/${conferenceId}`,
      {
        headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
      }
    )
  }

  getTrackedConferences() {
    return axios.get(`${this.baseUrl}/me/tracked-conferences`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  putTrackedConference(conferenceId, data) {
    return axios.put(
      `${this.baseUrl}/me/tracked-conferences/${conferenceId}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
      }
    )
  }

  deleteTrackedConference(conferenceId) {
    return axios.delete(
      `${this.baseUrl}/me/tracked-conferences/${conferenceId}`,
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

  getMeAbstracts() {
    return axios.get(`${this.baseUrl}/me/abstracts`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  postMeAbstract(data) {
    return axios.post(`${this.baseUrl}/me/abstracts`, data, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  putMeAbstract(id, data) {
    return axios.put(`${this.baseUrl}/me/abstracts/${id}`, data, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }

  deleteMeAbstract(id) {
    return axios.delete(`${this.baseUrl}/me/abstracts/${id}`, {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` },
    })
  }
}
