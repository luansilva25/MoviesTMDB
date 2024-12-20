import api from "@/plugins/axios";

class PopularService{
    async GetPopular(link){
        console.log(link)
        const {data} = await api.get(link)
        return data.results
    }
}

export default new PopularService()