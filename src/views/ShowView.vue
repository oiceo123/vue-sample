<template>
  <div class="container">
    <h1>v-show</h1>
    <h4 v-show="isVisible1">Show Component</h4>
    <br />
    <h1>v-if vs v-show</h1>
    <h4 v-if="isVisible2">Show Component</h4>
    <h4 v-show="isVisible2">Show Component</h4>
  </div>
</template>

<script>
export default {
  name: "ShowView",
  data() {
    return {
      isVisible1: true,
      isVisible2: false,
    };
  },
};
</script>

<style></style>
