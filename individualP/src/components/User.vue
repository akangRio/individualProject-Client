<script>
import { mapState } from 'pinia';
import { RouterView, RouterLink } from 'vue-router'
import { useMusicStore } from '../stores/counter';
export default {
    name: 'User',
    methods: {
        logout() {
            localStorage.clear()
            this.isloggedin = false
            this.$router.push('/login')
        },
        isLoginLocal() {
            if (localStorage.getItem('access_token')) {
                this.isloggedin = true
                this.email = localStorage.getItem('email')
            } else {
                this.isloggedin = false
            }
        }
    },
    created() {
        this.isLoginLocal()
    },
    data() {
        return {
            isloggedin: '',
            email: ''
        }
    }
}
</script>

<template>
    <div class="flex p-2 pr-6">

        <h2 v-if="isloggedin" class="pr-4">Welcome {{ email }} |</h2>
        <RouterLink v-if="isloggedin" class="pl-4" to="/" @click="logout">Logout</RouterLink>
    </div>
</template>