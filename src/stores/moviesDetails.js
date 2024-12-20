import { ref } from "vue"
import { defineStore  } from "pinia"
import { DetailsServices, TrailerService } from "@/services"

export const useMoviesDetailsStore = defineStore('moviesdetails', () =>{
    const MovieDetail = ref([])
    const MovieTrailer = ref({})

    async function GetDetails(link){
        MovieDetail.value = [await DetailsServices.GetDetails(link)]
        console.log(MovieDetail.value)
    }

    async function GetTrailer(link) {
        MovieTrailer.value = await TrailerService.GetTrailer(link)
        console.log(MovieTrailer.value)
    }



    return {MovieDetail, GetTrailer, MovieTrailer, GetDetails}
})