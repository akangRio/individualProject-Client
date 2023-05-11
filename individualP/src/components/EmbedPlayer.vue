<script>
export default {
    name: 'EmbedPlayer',
    mounted() {

    },
    props: ['i', 'e']
}
</script>

<template>
    <div :id="i + 1" class="h-min"></div>
</template>