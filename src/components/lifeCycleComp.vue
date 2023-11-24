<template>
  <h2>Component</h2>
  <p ref="pEl">Strawberries!</p>
</template>

<script>
export default {
  name: "LifeCycleComp",
  // จะเกิดเหตุการนี้เมื่อ ก่อน component จะถูกลบออกจาก DOM ทำให้สามารถ ref ได้อยู่
  beforeUnmount() {
    alert(
      "beforeUnmount: The text inside the p-tag is: " + this.$refs.pEl.innerHTML
    );
  },
  // จะเกิดเหตุการนี้เมื่อ ลบ component จาก DOM ไปแล้ง ทำให้ไม่สามารถ ref ได้
  unmounted() {
    alert("The component is removed (unmounted)!");
  },
};
</script>

<style></style>
