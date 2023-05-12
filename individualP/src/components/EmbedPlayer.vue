<script>
export default {
    name: 'EmbedPlayer',
    mounted() {

    },
    props: ['i', 'e']
}
</script>

<template>
    <div>
        <div :id="i + 1"></div>

    </div>
</template>