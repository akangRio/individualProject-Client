<script>
import { mapActions, mapState } from 'pinia';
import { useMusicStore } from '../stores/counter';

export default {
    name: 'Card',
    props: ['song'],
    computed: {
        // ...mapState(useMusicStore,[''])
    },
    methods: {
        ...mapActions(useMusicStore, ['faving'])
    }
}
    // song.album.images[0].url
</script>

<template>
    <div class="card w-auto bg-base-100 shadow-xl">
        <figure><img :src="song.album.images[0].url" alt="Shoes" /></figure>

        <!-- "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" -->
        <div class="card-body">
            <h2 class="card-title line-clamp-3 lg:line-clamp-none">
                {{ song.name }}
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p class="line-clamp-3">{{ song.artists[0].name }}</p>
            <div class="card-actions justify-between">
                <div class="badge badge-outline hover:bg-base-300 hover:cursor-pointer" @click="">
                    Details</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 hover:stroke-pink-500 hover:fill-pink-500 hover:cursor-pointer"
                    @click="faving(song.uri)">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>


            </div>


        </div>
    </div>
</template>