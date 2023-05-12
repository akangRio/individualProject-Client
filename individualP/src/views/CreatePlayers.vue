<script>
import { mapActions, mapState } from 'pinia';
import { useMusicStore } from '../stores/counter';
import Card from '../components/Card.vue';
import User from '../components/User.vue';

export default {
    name: 'CreatePlayers',
    computed: {
        ...mapState(useMusicStore, ['searchTrack', 'songs'])
    },
    methods: {
        ...mapActions(useMusicStore, ['spotifySearch'])
    },
    components: {
        Card,
        User
    }
}
</script>

<template>
    <div class="flex justify-between">
        <h2 class=" text-xl font-bold pl-10 pt-2">My Music</h2>
        <User />
    </div>

    <div class="flex bg-base-200 pl-20">
        <input type="text" placeholder="Search Songs here" class="input w-full max-w-xs pl-8" v-model="searchTrack.word"
            @change="spotifySearch" />
    </div>
    <div v-if="songs.length > 0" class="grid grid-rows-2 grid-cols-5">
        <Card v-for="(song, i) in songs" :key="i" :song="song" class="m-2 h-auto" />
    </div>
    <div v-if="songs.length == 0" class="hero min-h-screen bg-white rounded-b-xl pb-40 mt-2">
        <div class="hero-content text-center">
            <div class="max-w-md ">
                <h1 class="text-5xl font-bold">Search songs here, listen to it and like it</h1>
            </div>
        </div>
    </div>
</template>