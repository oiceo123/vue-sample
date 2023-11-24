<template>
  <div class="container">
    <h1 class="mb-4">v-on</h1>
    <!-- Counter -->
    <h4>Counter: {{ counter }}</h4>
    <button class="btn btn-primary" v-on:click="increase">Increase</button>
    <button class="btn btn-danger ms-1" @click="decrease">Decrease</button>
    <button class="btn btn-success ms-1" @click="increaseValue($event, 5)">
      Increase + 5
    </button>
    <!-- Form -->
    <div class="mt-4">
      <input type="text" @input="inputMessage" />
    </div>
    <p>message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "OnView",
  data() {
    return {
      counter: 0,
      message: "",
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
    increaseValue(value) {
      console.log(event);
      this.counter = this.counter + value;
    },
    inputMessage(event) {
      this.message = event.target.value;
    },
  },
};
</script>

<style></style>
