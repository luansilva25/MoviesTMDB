<script setup>
import router from '@/router';
import CardCarousel from './CardCarousel.vue';
    defineProps({
        movies_data:{
            type: Array,
            required: true
        },
    })

    
</script>
<template>
    <VSlideGroup class="pa-5">
        <VSlideGroupItem >
            <CardCarousel v-for="data in movies_data" :key="data.id" :img="data.poster_path" @click="router.push(`/movie/details/${data.id}`)"/>
        </VSlideGroupItem>
    </VSlideGroup>
</template>