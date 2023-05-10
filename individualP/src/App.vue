<script>
import { RouterView, RouterLink } from 'vue-router'
import NavBar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    NavBar
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
          <li><a @click="goregister">Register</a></li>
          <li><a @click="gologin">Login</a></li>



        </ul>
      </div>

    </div>
  </div>
</template>


