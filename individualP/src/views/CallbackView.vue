<script>
import { mapActions } from 'pinia';
import { useMusicStore } from '../stores/counter';
import User from '../components/User.vue';

export default {
    name: 'CallbackView',
    created() {
        console.log(this.$route.query);
        this.spotifyAuthorize(this.$route.query.code)
    },
    methods: {
        ...mapActions(useMusicStore, ['spotifyAuthorize'])
    },
    components: {
        User
    }
}
</script>

<template>
    <div class="flex justify-between">
        <h2 class=" text-xl font-bold pl-10 pt-2">My Music</h2>
        <User />
    </div>

    callback
</template>