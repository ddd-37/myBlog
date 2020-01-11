import axios from "axios";

const axiosFirebase = axios.create({
  baseURL: "https://myblog-177bd.firebaseio.com"
});

axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    console.log("AXIOS request error!", error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log("AXIOS response error!", error);
    return Promise.reject(error);
  }
);

export default axiosFirebase;
