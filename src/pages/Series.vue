<script setup>
import CardCarousel from '@/components/home/CardCarousel.vue';
import { useMoviesStore } from '@/stores/movies';
import { onMounted, ref } from 'vue';
import router from '@/router';

const MovieStore = useMoviesStore()

const page = ref(1)

async function Nextpage(Nextpage){
    page.value = Nextpage
    await MovieStore.GetAllMovies(`discover/tv?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&with_companies=1|2|3|420|7521&sort_by=popularity.desc&page=${page.value}`)
}

onMounted( async () =>{
    await MovieStore.GetAllMovies(`discover/tv?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&with_companies=1|2|3|420|7521&sort_by=popularity.desc&page=${page.value}`)
})
</script>
<template>
    <VContainer>
        <VRow>
            <VCol v-for="data in MovieStore.allMovies" :key="data.id">
                <CardCarousel  :img="data.poster_path" @click="router.push(`/movie/details/${data.id}`)"/>
            </VCol>
        </VRow>
        <VPagination v-model="page" @update:model-value="Nextpage" :length="MovieStore.AllMovies.total_pages"></VPagination>
    </VContainer>
    <VDialog v-show="MovieStore.loading">
            <VProgressCircular indeterminate></VProgressCircular>
    </VDialog>
</template>