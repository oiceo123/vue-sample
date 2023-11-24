<template>
  <div class="container">
    <h1>v-if</h1>
    <h4 v-if="stock > 10">In stock</h4>
    <h4 v-else-if="stock > 0">Vary few left!</h4>
    <h4 v-else>Not in stock</h4>
  </div>
</template>

<script>
export default {
  name: "IfView",
  data() {
    return {
      stock: 0,
    };
  },
};
</script>

<style></style>
