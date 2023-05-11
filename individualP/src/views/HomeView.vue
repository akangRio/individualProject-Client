<script>
import { mapActions, mapState } from 'pinia';
import EmbedPlayer from '../components/EmbedPlayer.vue';
import ProfileCard from '../components/ProfileCard.vue';
import { useMusicStore } from '../stores/counter';
export default {
  name: 'HomeView',
  methods: {
    dynamicallyLoadScript(url) {
      let script = document.createElement("script");
      script.src = url;

      document.body.appendChild(script);
    },
    ...mapActions(useMusicStore, ['fetchPlayers'])
  },
  components: {
    EmbedPlayer,
    ProfileCard
  },
  mounted() {

    this.dynamicallyLoadScript('https://open.spotify.com/embed-podcast/iframe-api/v1')

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      this.players.forEach((uri, i) => {
        const element = document.getElementById(i + 1);
        const options = {
          uri: uri.uri,
          //'spotify:album:2up3OPMp9Tb4dAKM2erWXQ'
        };
        const callback = (EmbedController) => { };

        IFrameAPI.createController(element, options, callback);
      })

    }


  },
  data() {
    return {
      uris: ['spotify:playlist:2kiZUS81TTizOxpVjhrTLv', 'spotify:album:2up3OPMp9Tb4dAKM2erWXQ']
    }
  },
  computed: {
    ...mapState(useMusicStore, ['players'])
  },
  created() {
    this.fetchPlayers()
  }

}


</script>

<template>
  <div class="grid grid-cols-2 grid-rows-auto">
    <ProfileCard />
    <EmbedPlayer v-for="(e, i) in players" :key="i" :i="i" :e="e" />


  </div>
</template>
