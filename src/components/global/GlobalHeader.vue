<script setup>
import { routes } from '@/utils/routes';
import { useMoviesStore } from '@/stores/movies';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const showsearchBar = ref(false)
const MoviesStore = useMoviesStore()
const navOpen = ref(false)
const link = ref('')
const search = ref('')

const linkComputed = computed(() => {
    return link.value + search.value
})

async function filterMovies() {
    if (search.value.length > 0) {
        await MoviesStore.filterMovies(linkComputed.value, route.path)
    }
    else if (route.path === '/movies') {
        await MoviesStore.GetAllMovies(`discover/movie?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&with_companies=1|2|3|420|7521&sort_by=popularity.desc`)
    }
    else if (route.path === '/series') {
        await MoviesStore.GetAllMovies(`discover/tv?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&with_companies=1|2|3|420|7521&sort_by=popularity.desc`)
    }
    console.log(search.value)
}

watch(route, () => {
    if (route.path === '/movies') {
        showsearchBar.value = true
        link.value = "search/movie?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&query="
    }
    else if (route.path === '/series') {
        showsearchBar.value = true
        link.value = "search/tv?api_key=e7d4b6a6fbebc495912044d6d4cc5a13&language=pt-BR&query="
    }
    else {
        showsearchBar.value = false
        link.value = ''
    }
})
</script>
<template>
    <VAppBar class="pa-2">
            <VAppBarTitle>DisneyVerse</VAppBarTitle>
            <VTextField placeholder="pesquise aqui..." width="50%" variant="outlined" class="mt-5"
                append-inner-icon="mdi-magnify" @input="filterMovies($event)" v-model="search" v-show="showsearchBar">
            </VTextField>
            <VList class=" d-md-flex d-none bg-transparent">
                <VListItem v-for="route, index in routes" :key="index">
                    <RouterLink :to="route.link" class="text-decoration-none text-white">
                        <VListItemTitle>{{ route.name }}</VListItemTitle>
                    </RouterLink>
                </VListItem>
            </VList>
        <VAppBarNavIcon class="d-md-none d-flex" @click="navOpen = !navOpen"></VAppBarNavIcon>
    </VAppBar>
    <VNavigationDrawer v-model="navOpen" location="right">
        <VList class="pa-4">
            <h1 class="text-center">{{route.name}}</h1>
            <VDivider></VDivider>
            <VListItem v-for="route, index in routes" :key="index">
                <RouterLink :to="route.link" class="text-decoration-none text-white">
                    <VListItemTitle class="d-flex justify-center align-center ga-5 pa-3"> <VIcon :icon="route.icon "/> {{ route.name }}</VListItemTitle>
                </RouterLink>
            </VListItem>
        </VList>
    </VNavigationDrawer>
</template>