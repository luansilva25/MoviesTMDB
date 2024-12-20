<script setup>
    defineProps({
        img: {
            type: String,
            required: true
        },
        channels: {
            type: Boolean,
            required: true
        },
        width:{
            type: String,
            default: '225'
        },
        height: {
            type: String,
            default: '325'
        },
        height_card: {
            type: String,
            default: '325'
        },
        cover:{
            type: Boolean,
            default: true
        },
        class_card:{
            type: String,
            default: null
        },
        is_alternative: {
            type: Boolean,
            default: false
        }
    })
</script>
<template>
    <VCard class="ma-3 d-flex justify-center scale-card" :class="class_card" :width="width"  :height="height_card">
        <VImg :src="'https://image.tmdb.org/t/p/w300/' + img" :cover="cover" :height="height" v-if="!is_alternative"></VImg>
        <VImg :src="img" :height="height" v-else/>
    </VCard>
</template>
<style scoped>
    .scale-card{
        transition: .75s ease;
    }
    .scale-card:hover{
        transform: scale(1.03);
    }
</style>