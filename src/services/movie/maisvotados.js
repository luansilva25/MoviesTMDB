import api from "@/plugins/axios";

class MaisVotadosService{
    async GetMaisVotados(link){
        console.log(link)
        const {data} = await api.get(link)
        return data.results
        
    }
}

export default new MaisVotadosService()