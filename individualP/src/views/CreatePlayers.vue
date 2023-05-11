<script>
import { mapActions, mapState } from 'pinia';
import { useMusicStore } from '../stores/counter';
import Card from '../components/Card.vue';

export default {
    name: 'CreatePlayers',
    computed: {
        ...mapState(useMusicStore, ['searchTrack', 'songs'])
    },
    methods: {
        ...mapActions(useMusicStore, ['spotifySearch'])
    },
    components: {
        Card
    }
}
</script>

<template>
    <input type="text" placeholder="Search Songs here" class="input w-full max-w-xs" v-model="searchTrack.word"
        @change="spotifySearch" />
    <div class="grid grid-rows-2 grid-cols-2">
        <Card v-for="(song, i) in songs" :key="i" :song="song" />
    </div>



    <pre>
        {{ songs }}
    </pre>
</template>