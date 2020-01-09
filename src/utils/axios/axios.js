import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// TODO - set up some error handling here

export default axiosRequest;
