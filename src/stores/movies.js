import { computed, ref } from "vue"
import { PopularService, AltaService, LancamentoService, MaisVotadosService, MoviesService } from "@/services"
import { defineStore } from "pinia"
import api from "@/plugins/axios"

export const useMoviesStore = defineStore('movies', () => {
    const AllMovies = ref([])
    const loading = ref(false)
    const connection = ref(false)
    const state = ref([[], [], [], []])

    const GetPopularMovies = async (link) => {
        state.value[0] = await PopularService.GetPopular(link)
    }

    const GetAltaMovies = async (link) => {
        state.value[1] = await AltaService.GetAlta(link)
    }

    const GetLancamentoMovies = async (link) => {
        state.value[2] = await LancamentoService.GetLancamento(link)
    }
    const GetMaisVotadosMovies = async (link) => {
        state.value[3] = await MaisVotadosService.GetMaisVotados(link)
        console.log(state.value)
    }
    const GetAllMovies = async (link) => {
        AllMovies.value = await MoviesService.GetMovies(link)
        console.log(AllMovies.value)
    }

    const filterMovies = async (link, path) => {
        const movies = await MoviesService.GetMovies(link)

        console.log('não funfou')

        const disneyCompanyIds = [2, 3, 420, 1, 25];

        let disneyMovies = []
        let isDisneyMovie = null
        let data = null


        try {
            loading.value = true
            for (const movie of movies.results) {
                if (path === '/movies') {
                    data = (await api.get(`/movie/${movie.id}?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR`)).data
                    isDisneyMovie = data?.production_companies?.some((company) =>
                        disneyCompanyIds.includes(company.id))
                }
                else if (path === '/series') {
                    data = (await api.get(`/tv/${movie.id}?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR`)).data
                    isDisneyMovie = data?.production_companies?.some((company) =>
                        disneyCompanyIds.includes(company.id))
                }

                if (isDisneyMovie) {
                    disneyMovies.push(data);
                }
            }
            AllMovies.value = disneyMovies
        }
        catch(err){
            console.error(err)
        }
        finally{
            loading.value = false
            connection.value = true
        }
    }

    const allMovies = computed(() => {
        return AllMovies.value?.results ? AllMovies.value.results : AllMovies.value
    })

    return { state, allMovies, loading, AllMovies, filterMovies, GetPopularMovies, GetAltaMovies, GetLancamentoMovies, GetMaisVotadosMovies, GetAllMovies }
})