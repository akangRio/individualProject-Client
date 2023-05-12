import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";
// const baseUrl = "https://individualp-production.up.railway.app";
import querystring from "querystring";
import router from "../router";
const redirecturi = "http://localhost:5173/callback";
// const redirecturi = "https://final-56b4c.web.app/callback";

export const useMusicStore = defineStore("music", {
  state() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      searchTrack: {
        word: "",
      },
      songs: [],
      registerData: {
        email: "",
        password: "",
      },
      players: [],
      // qr: "",
    };
  },
  actions: {
    async spotifyLogin() {
      try {
        let scope = "user-read-private user-read-email";
        const client_id = "ccccac09d6a642e7b4d45b5ede1e7525";
        let redirect_uri = redirecturi;
        let spotifyUrl =
          "https://accounts.spotify.com/authorize?" +
          querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
          });
        console.log(spotifyUrl);

        window.location.href = spotifyUrl;
        // const login = await axios.get(spotifyUrl);

        // console.log(login);
      } catch (err) {
        console.log(err);
      }
    },

    async spotifyAuthorize(code) {
      try {
        const spotAuthing = await axios.post(`${baseUrl}/callback`, {
          code: code,
        });

        localStorage.setItem("access_token", spotAuthing.data.access_token);
        localStorage.setItem("email", spotAuthing.data.email);
        router.push("/");
        console.log(spotAuthing);
        // this.qr = spotAuthing.data.qr;
      } catch (err) {
        console.log(err);
      }
    },

    async spotifyPlayer() {
      try {
      } catch (err) {
        console.log(err);
      }
    },

    async spotifySearch() {
      try {
        const songs = await axios.post(`${baseUrl}/spot`, this.searchTrack, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(songs);
        this.songs = songs.data;
        console.log(songs.data);
      } catch (err) {
        console.log(err);
      }
    },

    async login() {
      try {
        const lo = await axios.post(`${baseUrl}/userlogin`, this.loginData);
        console.log(lo);
        if (lo) {
          localStorage.setItem("access_token", lo.data.access_token);
          localStorage.setItem("email", lo.data.email);
          this.isLoggedin = true;
          router.push("/");
        }
        Swal.fire({
          title: "Succes!",
          text: "Welcome",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "umail / password is invallid",
          icon: "error",
          confirmButtonText: "try again",
        });
      }
    },

    async register() {
      try {
        const re = await axios.post(
          `${baseUrl}/userregister`,
          this.registerData
        );

        console.log(re);

        if (re) {
          router.push("/login");
        }
      } catch (err) {
        console.log(err);
      }
    },

    async faving(uri) {
      try {
        console.log(uri);
        const saveUri = await axios.post(
          `${baseUrl}/saveuri`,
          { uri: uri },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire({
          title: "Success!",
          text: "added to your music",
          icon: "success",
        });
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPlayers() {
      try {
        const players = await axios.get(`${baseUrl}/players`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.players = players.data.players;
        console.log(players);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
