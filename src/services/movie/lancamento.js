import api from "@/plugins/axios";

class LancamentoService{
    async GetLancamento(link){
        console.log(link)
        const {data} = await api.get(link)
        return data.results
    }
}

export default new LancamentoService()