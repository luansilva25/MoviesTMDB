import axios from "axios";

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2Q0YjZhNmZiZWJjNDk1OTEyMDQ0ZDZkNGNjNWExMyIsIm5iZiI6MTcxMDg5ODIyMC40MzkwMDAxLCJzdWIiOiI2NWZhM2MyY2Q0MGQ0YzAxN2M2ZjZkZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y-HQJBmKmfHdq3x0dyQtlAM0Mo2RGfVi0s4cdsPGluU`
    }
})

export default api