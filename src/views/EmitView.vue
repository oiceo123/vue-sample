<template>
  <div class="container">
    <h1>emit</h1>
    <EmitComp
      v-for="(food, index) in foods"
      :key="index"
      :foodName="food.name"
      :foodDesc="food.desc"
      :isFavorite="food.favorite"
      @toggle-favorite="receiveEmit"
    />
  </div>
</template>

<script>
import EmitComp from "@/components/emitComp.vue";
export default {
  name: "EmitView",
  components: {
    EmitComp,
  },
  data() {
    return {
      foods: [
        {
          name: "Apples",
          desc: "Apples are a type of fruit that grow on trees.",
          favorite: true,
        },
        {
          name: "Pizza",
          desc: "Pizza has a bread base with tomato sauce, cheese, and toppings on top.",
          favorite: false,
        },
        {
          name: "Rice",
          desc: "Rice is a type of grain that people like to eat.",
          favorite: false,
        },
        {
          name: "Fish",
          desc: "Fish is an animal that lives in water.",
          favorite: true,
        },
        {
          name: "Cake",
          desc: "Cake is something sweet that tates good.",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    receiveEmit(foodName) {
      let foodFound = this.foods.find((food) => {
        return food.name === foodName;
      });
      foodFound.favorite = !foodFound.favorite;
    },
  },
};
</script>

<style></style>
