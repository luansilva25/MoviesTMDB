<script setup>
    import { useMoviesDetailsStore } from '@/stores/moviesDetails';
import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    const detailsStore = useMoviesDetailsStore()
    const route = useRoute()
    const video = ref(`https://www.youtube.com/embed/${null}`)
    const liked = ref(false)
    const watchTrailer = ref(false)
    onMounted( async () =>{
        const movie_id = route.params.id
        await detailsStore.GetTrailer(`/movie/${movie_id}/videos?language=pt-BR`)
        await detailsStore.GetDetails(`/movie/${movie_id}?language=pt-BR`)
        video.value = `https://www.youtube.com/embed/${detailsStore.MovieTrailer[0].key}`
    })

    function returnGenres(genres){
        let genres_name = []
        for(let i = 0; i < genres.length; i++){
            genres_name.push(genres[i].name)
        }

        return genres_name.join(',  ')
    }
</script>
<template>
    <div class="pa-5">
        <div v-for="details in detailsStore.MovieDetail" :key="details.id" class="d-flex flex-wrap w-screen justify-center items-center ga-5 pa-5">
            <div class='d-flex flex-column justify-center align-center ga-5'>
                <VImg :src="'https://image.tmdb.org/t/p/w300/' + details.poster_path" width="350" cover></VImg>
                <div class="d-flex justify-end">
                    <VCard class="pa-5 rounded-xl d-flex flex-wrap justify-center">
                        <div class="d-flex flex-column justify-center align-center">
                            <VCardTitle>orçamento</VCardTitle>
                            <VCardSubtitle>US$ {{details.budget.toLocaleString('us-EN', {  currency: 'BRL' })}}</VCardSubtitle>
                        </div>
                        <div class="d-flex flex-column justify-center align-center">
                            <VCardTitle >status</VCardTitle>
                            <VCardSubtitle >{{details.status}}</VCardSubtitle>
                        </div>
                        <div class="d-flex flex-column justify-center align-center">
                            <VCardTitle >votos</VCardTitle>
                            <VCardSubtitle>{{details.vote_count}}</VCardSubtitle>
                        </div>
                        <div class="d-flex flex-column justify-center align-center">
                            <VCardTitle>receita</VCardTitle>
                            <VCardSubtitle >US$ {{details.revenue.toLocaleString('us-EN', { currency: 'BRL' })}}</VCardSubtitle>
                        </div>   
                    </VCard>
                </div>
            </div>
            <div class="w-66">
                <div class="d-flex flex-wrap align-center">
                    <VCardTitle>{{details.title}}</VCardTitle> 
                    <div class="d-flex items-center">
                        <VCardText class="d-flex ga-2" ><VIcon icon="mdi-star" class="text-yellow-lighten-1"></VIcon>{{details.vote_average.toFixed(1).replace('.', ',')}}</VCardText>
                    </div>
                    <VIcon icon="mdi-heart"></VIcon>
                </div>
                <VCardSubtitle>{{details.release_date}} - {{returnGenres(details.genres)}} - {{details.runtime}} min</VCardSubtitle>
                <VCardText >{{details.overview}}</VCardText>
            <div>
            <div class="d-flex algin-center justify-center w-full">
                <VCardActions class="d-flex ga-10">
                    <VBtn class="rounded-xl d-flex justify-center align-center pa-6" :class="detailsStore.MovieTrailer[0]?.key ? 'bg-green-lighten-1' : 'bg-grey-darken-2'" :disabled="!detailsStore.MovieTrailer[0]?.key" @click="watchTrailer = !watchTrailer">
                        <VIcon :icon="detailsStore.MovieTrailer[0]?.key ? 'mdi-play' : 'mdi-cancel'" size="25" ></VIcon>
                        <VCardTitle>{{detailsStore.MovieTrailer[0]?.key ? 'Assistir ao trailer' : 'Trailer não disponivel'}}</VCardTitle>
                    </VBtn>
                </VCardActions>
            </div>
            </div>
        </div>
        </div>
        <VDialog v-model="watchTrailer" >
            <div class="d-flex justify-center align-center w-screen">
                    <iframe
                    :src="video"
                    width="1080"
                    height="500"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
            </div>
        </VDialog>
    </div>
</template>