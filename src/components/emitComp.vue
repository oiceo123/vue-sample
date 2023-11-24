<template>
  <div class="border border-black p-4 m-4 rounded">
    <h2>{{ foodName }}</h2>
    <p>{{ foodDesc }}</p>
    <button class="btn btn-primary" @click="toggleFavorite">Favorite</button>
    <span class="ms-3" v-show="isFavorite">Favorite</span>
  </div>
</template>

<script>
export default {
  name: "EmitComp",
  props: ["foodName", "foodDesc", "isFavorite"],
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite", this.foodName);
    },
  },
};
</script>

<style></style>
