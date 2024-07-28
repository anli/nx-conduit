import axios from 'axios'
import { backendBaseUrl } from "../config";

const instance = axios.create({
  baseURL: backendBaseUrl,
});


export const client = instance

