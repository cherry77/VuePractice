<template>
  <div class="home">
    <app-bar :title="'TODO'" />
    <avatar />
  </div>
</template>
<script>
import AppBar from "./../components/AppBar.vue";
import Avatar from "./../components/Avatar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    Avatar
  }
};
</script>
