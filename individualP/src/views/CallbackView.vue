<script>
import { mapActions } from 'pinia';
import { useMusicStore } from '../stores/counter';

export default {
    name: 'CallbackView',
    created() {
        console.log(this.$route.query);
        this.spotifyAuthorize(this.$route.query.code)
    },
    methods: {
        ...mapActions(useMusicStore, ['spotifyAuthorize'])
    }
}
</script>

<template>
    callback
</template>