import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-app-d6db9-default-rtdb.firebaseio.com/",
});

export default instance;
