import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default axiosRequest;
