<template>
  <div class="container">
    <h1>Lifecycle Hooks</h1>
    <p ref="pEl"></p>
    <form class="mb-3">
      <label for="name" class="form-label">name: </label>
      <input type="text" class="form-control" ref="inpEl" />
    </form>
    <h3>couter: {{ couter }}</h3>
    <button class="btn btn-primary my-2" @click="this.couter++">
      Increase
    </button>
    <ol class="my-3" ref="ulEl"></ol>
    <button class="btn btn-primary" @click="this.activeComp = !this.activeComp">
      {{ activeComp ? "Remove component" : "Add component" }}
    </button>
    <div>
      <LifeCycleComp v-if="activeComp" />
    </div>
  </div>
</template>

<script>
import LifeCycleComp from "@/components/lifeCycleComp.vue";
export default {
  name: "LifeCycle",
  components: {
    LifeCycleComp,
  },
  data() {
    return {
      couter: 0,
      activeComp: true,
    };
  },
  mounted() {
    this.$refs.pEl.innerHTML = "The component is mounted!";
    this.$refs.inpEl.focus();
  },
  /* ใช้สำหรับอัพเดทค่าบางอย่าง ห้ามไปอัพเดทค่าใน updated hook เด็ดขาดเนื่องจากจะเกิด Infinite loop */
  beforeUpdate() {
    this.$refs.ulEl.innerHTML +=
      "<li>beforeUpdate: This happened just before the 'updated' hook.</li>";
  },
  updated() {
    this.$refs.ulEl.innerHTML += "<li>updated: The component is updated!</li>";
  },
};
</script>

<style></style>
