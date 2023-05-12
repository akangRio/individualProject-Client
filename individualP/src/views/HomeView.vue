<script>
import { mapActions, mapState } from 'pinia';
import EmbedPlayer from '../components/EmbedPlayer.vue';
import ProfileCard from '../components/ProfileCard.vue';
import { useMusicStore } from '../stores/counter';
import User from '../components/User.vue';
import Info from '../components/Info.vue';

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
    ProfileCard,
    User,
    Info

  },
  mounted() {
    ;
    this.dynamicallyLoadScript('https://open.spotify.com/embed-podcast/iframe-api/v1')

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      this.players.forEach((uri, i) => {
        const element = document.getElementById(i + 1);
        const options = {
          uri: uri.uri,
          //'spotify:album:2up3OPMp9Tb4dAKM2erWXQ'
        };
        const callback = (EmbedController) => {
        };

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
  },
  unmounted() {


  }

}


</script>

<template>
  <div class="flex justify-between">
    <h2 class=" text-xl font-bold pl-10 pt-2">My Music</h2>
    <User />
  </div>


  <Info v-if="players.length == 0" />

  <div v-if="players.length > 0" class="grid grid-cols-2 grid-rows-auto">
    <!-- <ProfileCard /> -->
    <EmbedPlayer v-for="(e, i) in players" :key="i" :i="i" :e="e" />


  </div>
</template>
