import axios from 'axios'

import { BASE_URL_API } from '@env'

export const api = axios.create({
    baseURL: BASE_URL_API
})