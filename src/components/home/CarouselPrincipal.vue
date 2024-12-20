<script setup>
    import { ItemsCarousel } from '@/utils/carouselContent';
</script>
<template>
    <VCarousel class="bg-white" show-arrows="hover" progress hide-delimiters-background interval="3000" cycle>
        <VCarouselItem v-for="carousel in ItemsCarousel" :key="carousel">
            <VImg :src="carousel.img" cover absolute></VImg>
            <VCardText class="text-h5 text-white position-absolute right-0" style="z-index: 2; width:40%"><h1 class="">{{carousel.title}}</h1>{{carousel.description}}</VCardText>
            <div style="width: 100%; z-index: 1; position: relative; height: 100%; background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(2,2,2,1) 75%);"></div>
        </VCarouselItem>
    </VCarousel>
</template>