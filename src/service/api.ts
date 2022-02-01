import axios from 'axios'

import { ENVIRONMENT_NAME, PROTOCOL, HOST, HOST_PORT, BASE_URL } from '@env'

import { baseUrlProps } from './interfaces'

const url: baseUrlProps = {
  development: PROTOCOL + HOST + ':' + HOST_PORT,
  production: BASE_URL,
}

export const api = axios.create({
  baseURL: url[ENVIRONMENT_NAME],
})
