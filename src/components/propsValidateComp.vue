<template>
  <div>
    <h2>{{ foodName }}</h2>
    <p>{{ foodDesc }}</p>
    <p v-show="isFavorite">Favorite</p>
  </div>
</template>

<script>
export default {
  name: "PropsValidateComp",
  props: {
    foodName: {
      type: String,
      required: true,
    },
    foodDesc: {
      type: String,
      required: false,
      default: "This is the default description.",
      validator: function (value) {
        if (value.length > 20 && value.length < 50) {
          return true;
        } else {
          return false;
        }
      },
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style></style>
