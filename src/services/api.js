import axios from "axios"

const api = axios.create({
  baseURL: "https://baconipsum.com/api"
})

export default api
