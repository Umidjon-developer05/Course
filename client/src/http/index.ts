import axios from "axios";

export const API_URL = `https://course-backend-six.vercel.app`;

const $axios = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/api`,
});

export default $axios;
