// how to setup a base axios instance
import axios from "axios";

const EnemInstance = axios.create({
  baseURL: "https://enem-api.onrender.com/",
  headers: { "Content-Type": "application/json" },
});

export default EnemInstance;
