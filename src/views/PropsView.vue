<template>
  <div class="container">
    <h1>props</h1>
    <div class="border border-black m-4 p-4">
      <PropsComp
        food-name="Apples"
        food-desc="Apples are a type of fruit that grow on trees."
        :is-favorite="true"
      />
      <PropsComp
        foodName="Pizza"
        foodDesc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
        :isFavorite="false"
      />
      <PropsComp
        foodName="Rice"
        foodDesc="Rice is a type of grain that people like to eat."
        :isFavorite="false"
      />
    </div>
  </div>
</template>

<script>
import PropsComp from "@/components/propsComp.vue";
export default {
  name: "PropsView",
  components: {
    PropsComp,
  },
};
</script>

<style></style>
