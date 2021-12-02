import axios from 'axios'

export default class ZapierClient {
  baseUrl = 'https://hooks.zapier.com/hooks/catch/4221607'

  postIssue(data) {
    return axios.post(`${this.baseUrl}/veawnx/`, JSON.stringify(data))
  }
}
