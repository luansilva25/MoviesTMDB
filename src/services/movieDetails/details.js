import api from "@/plugins/axios";

class DetailsService{
    async GetDetails(link){
        const {data} = await api.get(link)
        console.log(data)
        return data
    }
}

export default new DetailsService()