<template id="body">
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
body {
  background-image: url(https://i.pinimg.com/originals/09/24/4c/09244c7f7dd4d17b0484370f32db6641.gif);
  background-repeat: no-repeat;
  background-size: 100vw 80vh;
}
</style>
