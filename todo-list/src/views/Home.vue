<template>
  <div class="home">
    <app-bar :title="'TODO'" />
    <avatar />
    <gradient />
  </div>
</template>
<script>
import AppBar from "./../components/AppBar.vue";
import Avatar from "./../components/Avatar.vue";
import Gradient from "./../components/Gradient.vue";

export default {
  name: "App",
  components: {
    AppBar,
    Avatar,
    Gradient
  }
};
</script>
