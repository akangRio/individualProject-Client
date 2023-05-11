<script>
import { RouterView, RouterLink } from 'vue-router'
import NavBar from './components/Navbar.vue'
import User from './components/User.vue';
// import { mapState } from 'pinia';
// import { useMusicStore } from './stores/counter';
export default {
  name: 'App',
  components: {
    NavBar,
    User
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('access_token'))
        this.isLoggedin = true
      else this.isLoggedin = false
    },
    logout() {
      localStorage.clear()
      this.isLoggedin = false
    }
  },
  created() {
    this.checkLogin()
  },

  data() {
    return {
      isLoggedin: '',
    }
  }
}

</script>

<template>
  <div class="bg-gradient-to-r from-cyan-500 to-green-500">

    <NavBar />
    <div class="drawer h-auto">

      <!-- <DrawerContent /> -->

      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-content">

        <!-- Drawer-content here -->
        <div class="border bg-base-300 m-2 text-base-content rounded-xl">
          <div>

            <div class="flex justify-between">
              <h2 class=" text-xl font-bold pl-10 pt-2">Posting</h2>
              <User v-if="isLoggedin" :isLoggedin="isLoggedin" @logout="logout" />
            </div>

            <RouterView />
          </div>
        </div>

      </div>
      <!-- End-drawer content here -->

      <!-- Drawer -side -->
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <RouterLink to="/register">
            <li><a @click="goregister">Register</a></li>
          </RouterLink>
          <RouterLink to="/login">
            <li><a @click="gologin">Login</a></li>
          </RouterLink>
          <RouterLink to="/createPlayer">
            <li><a>Create Player</a></li>
          </RouterLink>



        </ul>
      </div>

    </div>
  </div>
</template>


