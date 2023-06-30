import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.promogate.app'
})

export { api };
