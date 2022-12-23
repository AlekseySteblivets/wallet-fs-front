import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://uptight-top-coat-fish.cyclic.app',
});

instance.interceptors.request.use(config => {
  const token = JSON.parse(
    JSON.parse(window.localStorage.getItem('persist:token')).accesToken
  );
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(
      JSON.parse(window.localStorage.getItem('persist:token')).accesToken
    )}`;
  }
  return config;
});

export default instance;
