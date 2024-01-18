import axios from 'axios';

export const dev = 'https://berro-tech-api.herokuapp.com/v1';

const api = axios.create({ baseURL: dev });


export default api