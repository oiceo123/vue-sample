<template>
  <div class="container">
    <h1>ref</h1>
    <div class="border border-black m-4 p-4">
      <h4 class="mb-3">Basic</h4>
      <p ref="pEl">This is the initial text</p>
      <button class="btn btn-primary" @click="changeVal">Change Text</button>
    </div>
    <div class="border border-black m-4 p-4">
      <h4 class="mb-3">ref with v-for</h4>
      <button @click="getValue">Get the 3rd list element</button><br />
      <ul>
        <li v-for="(x, index) in liTexts" ref="liEl" :key="index">{{ x }}</li>
      </ul>
      <pre>{{ thirdEl }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefView",
  data() {
    return {
      thirdEl: " ",
      liTexts: ["Apple", "Banana", "Kiwi", "Tomato", "Lichi"],
    };
  },
  methods: {
    changeVal() {
      this.$refs.pEl.innerHTML = "Hello World";
    },
    getValue() {
      this.thirdEl = this.$refs.liEl[2].innerHTML;
      console.log("this.$refs.liEl = ", this.$refs.liEl);
    },
  },
};
</script>

<style></style>
