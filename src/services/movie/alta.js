import api from "@/plugins/axios";

class AltaService{
    async GetAlta(link){
        console.log(link)
        const {data} = await api.get(link)
        return data.results
    }
}

export default new AltaService()