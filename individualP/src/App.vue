<script>
import { RouterView, RouterLink } from 'vue-router'
import NavBar from './components/Navbar.vue'
// import { mapState } from 'pinia';
// import { useMusicStore } from './stores/counter';
export default {
  name: 'App',
  components: {
    NavBar,
  },
  methods: {
    isL() {
      if (localStorage.getItem('access_token')) {
        this.log = true
      } else {
        this.log = false
      }
    },
  },
  data() {
    return {
      log: ''
    }
  },
}

</script>

<template>
  <div class="bg-gradient-to-r from-cyan-500 to-green-500">

    <NavBar />
    <div class="drawer h-screen">

      <!-- <DrawerContent /> -->

      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-content">

        <!-- Drawer-content here -->
        <div class="border bg-base-300 m-2 text-base-content h-auto rounded-xl min-h-screen h-4/6">


          <RouterView @vnodeBeforeUpdate="isL" />

        </div>

      </div>
      <!-- End-drawer content here -->

      <!-- Drawer -side -->
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <RouterLink v-if="!log" to="/register">
            <li><a @click="goregister">Register</a></li>
          </RouterLink>
          <RouterLink v-if="!log" to="/login">
            <li><a @click="gologin">Login</a></li>
          </RouterLink>
          <RouterLink v-if="log" to="/createPlayer">
            <li><a>Create Player</a></li>
          </RouterLink>



        </ul>
      </div>

    </div>
  </div>
</template>


