<template>
  <div class="container">
    <h1>Props Validate</h1>
    <div class="border border-black m-4 p-4">
      <PropsValidateComp
        food-name="Apples"
        food-desc="Apples are a type of fruit that grow on trees."
        :is-favorite="true"
      />
      <PropsValidateComp
        foodName="Pizza"
        foodDesc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
        :isFavorite="false"
      />
      <PropsValidateComp
        foodName="Rice"
        foodDesc="Rice is a type of grain that people like to eat."
        :isFavorite="false"
      />
    </div>
  </div>
</template>

<script>
import PropsValidateComp from "@/components/propsValidateComp.vue";
export default {
  name: "PropsValidateView",
  components: {
    PropsValidateComp,
  },
};
</script>

<style></style>
