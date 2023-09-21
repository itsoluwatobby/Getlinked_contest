import axios from 'axios'

const GetlinkedBaseURL = 'https://backend.getlinked.ai'

export const axiosFetch = axios.create({
  baseURL: GetlinkedBaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
