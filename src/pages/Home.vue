<script setup>
import ConteinerCarousels from '@/components/global/ConteinerCarousels.vue';
import { useMoviesStore } from '@/stores/imports.js';
import { onMounted } from 'vue';
import { names } from '@/utils/containerNames';
import PopularCorousel from '@/components/home/PopularCorousel.vue';
import CardCarousel from '@/components/home/CardCarousel.vue';
import CarouselPrincipal from '@/components/home/CarouselPrincipal.vue';
import { Channels } from '@/utils/DisneyChannels';
const moviesStore = useMoviesStore()

const apiKey = import.meta.env.VITE_API_KEY


onMounted(async () => {
    await moviesStore.GetPopularMovies(`discover/movie?api_key=${apiKey}&with_companies=1|2|3|420|7521&sort_by=popularity.desc&language=pt-BR&primary_release_date.lte=2024-10-31`)
    await moviesStore.GetAltaMovies(`discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=vote_average.desc&with_companies=1|2|3|420|7521&vote_count.gte=1000`)
    await moviesStore.GetLancamentoMovies(`discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=release_date.desc&with_companies=1|2|3|420|7521&primary_release_date.lte=2024-10-31`)
    await moviesStore.GetMaisVotadosMovies(`discover/movie?api_key=${apiKey}&language=pt-BR&with_companies=1|2|3|420|7521&sort_by=vote_count.desc`)

})
</script>
<template>
    <VRow>
        <VCol>
            <CarouselPrincipal />
            <div class="d-flex flex-wrap justify-center pa-10">
                <CardCarousel v-for="Channel in Channels" :key="Channel" :img="Channel.img"
                    :is_alternative="Channel.is_sw" :cover="false" height_card="200" width="250"
                    class_card="pa-5 rounded-xl" />
            </div>
            <VContainer>
                <ConteinerCarousels>
                    <VSheet class="bg-transparent" v-for="movie, index in moviesStore.state">
                        <h1>{{ names[index] }}</h1>
                        <PopularCorousel :movies_data="movie" />
                    </VSheet>
                </ConteinerCarousels>
            </VContainer>
        </VCol>
    </VRow>
</template>