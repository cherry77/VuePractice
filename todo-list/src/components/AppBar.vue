<template>
  <div class="app-bar">
    <span @click="$emit('left')">
      <i :class="['fa', `fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span @click="$emit('right')">
      <i :class="['fa', `fa-${right}`]"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    left: {
      type: String,
      default: "chevron-left"
    },
    right: {
      type: String,
      default: "ellipsis-v"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  z-index: 1;

  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>
