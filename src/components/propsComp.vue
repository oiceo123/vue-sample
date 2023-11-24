<template>
  <div>
    <h2>{{ foodName }}</h2>
    <p>{{ foodDesc }}</p>
    <!-- basic -->
    <!-- <p v-show="isFavorite">Favorite</p> -->

    <!-- change props value -->
    <button class="btn btn-primary mb-3" @click="toggleFavorite">
      Favorite
    </button>
    <span class="ms-3" v-show="foodIsFavorite">Favorite</span>
  </div>
</template>

<script>
export default {
  name: "PropsComp",
  props: ["foodName", "foodDesc", "isFavorite"],
  /* change props value */
  data() {
    return {
      foodIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite;
    },
  },
};
</script>

<style></style>
