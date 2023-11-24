<template>
  <div class="container">
    <h1>Computed</h1>
    <input type="checkbox" v-model="chbxVal" /> {{ isImportant }}
    <div class="mt-3">
      <button @click="this.count++">counter : {{ count }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedView",
  data() {
    return {
      chbxVal: false,
      count: 0,
    };
  },
  // จะทำงานอัตโนมัติเมื่อตัวแปรที่อ้างอิงมีการเปลี่ยนแปลง
  // ใช้งานเหมือนกับตัวแปรตัวนึง แต่เป็นตัวแปรที่มีความ dynamic
  // ไม่รับ parameter
  computed: {
    isImportant() {
      if (this.chbxVal) {
        alert("in if");
        return "yes";
      } else {
        alert("in else");
        return "no";
      }
    },
  },
};
</script>

<style></style>
