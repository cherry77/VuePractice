<template>
  <div class="avater">
    <div class="avater_face">
      <img src="./../assets/avater.jpeg" />
    </div>
    <h2 class="avater_name">Hello Jane</h2> 
    <p class="avater_tip">
      Looks like feed good.
      <br />You have 6 tasks to do today.
    </p>
    <p class="avater_date">TODAY : {{ today | dateString }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      today: new Date()
    };
  },
  filters: {
    dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ", $1");
    }
  }
};
</script>
<style lang="scss">
.avater {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px;
  height: 300px;
  transition: all 0.5s ease;
}
.avater_face {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.avater_name {
  margin-top: 32px;
  padding: 0 6px;
  font-size: 32px;
  letter-spacing: 1;
  font-weight: 300;
}
.avater_tip {
  margin-top: 16px;
  font-size: 13px;
  padding: 0 6px;
  font-weight: 100;
  opacity: 0.8;
  line-height: 1.6em;
}
.avater_date {
  margin-top: 44px;
  margin-bottom: 16px;
  padding: 0 6px;
  font-size: 16px;
}
</style>
