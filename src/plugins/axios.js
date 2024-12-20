import axios from "axios";
const tokenAccess = import.meta.env.VITE_TOKEN_ACCESS

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: `Bearer ${tokenAccess}`
    }
})

export default api