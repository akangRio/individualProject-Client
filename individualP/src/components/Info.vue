<script>
export default {
    name: 'Info',
    methods: {
        getName() {
            this.name = localStorage.getItem('email')
        }
    },
    created() {
        this.getName()
    },
    data() {
        return {
            name: ''
        }
    }
}
</script>

<template>
    <div class="hero min-h-screen bg-base-200 rounded-xl">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hello {{ name }}</h1>
                <p class="py-6">You Haven't got any collections yet.</p>
                <RouterLink to="/createPlayer"> <button
                        class="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Search Songs</button></RouterLink>
            </div>
        </div>
    </div>
</template>