import api from "@/plugins/axios";

class TrailerService{
    async GetTrailer(link){
        const {data} = await api.get(link)
        return data.results
    }
}

export default new TrailerService()