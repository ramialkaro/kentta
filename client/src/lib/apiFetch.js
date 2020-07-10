import axios from 'axios'
import {ApiUrl} from './config'

const apiFetch = axios.create({
    baseURL:ApiUrl,
})

export default apiFetch