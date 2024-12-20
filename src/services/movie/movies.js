import api from "@/plugins/axios";

class MoviesService{
    async GetMovies(link){
        console.log(link)
        const {data} = await api.get(link)
        return data
        
    }
}

export default new MoviesService()