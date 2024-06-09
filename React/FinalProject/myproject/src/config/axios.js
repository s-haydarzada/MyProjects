import axios from "axios"

export const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
  })
