import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://chain.so/api/v2/',
});
export default Api;
