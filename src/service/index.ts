import axios from 'axios';

export const dev = 'https://api.escuelajs.co/api/v1';

const api = axios.create({ baseURL: dev });


export default api