<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
    name: 'User',
    methods: {
        logout() {
            localStorage.clear()

        }
    },
    props: ['isLoggedin']
}
</script>

<template>
    <div class="flex p-2 pr-6">

        <h2 class="pr-4">Welcome</h2>|
        <RouterLink class="pl-4" to="/" @click="logout">Logout</RouterLink>
    </div>
</template>