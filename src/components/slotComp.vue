<template>
  <div>
    <slot name="header"></slot>
    <slot>
      <hr />
      Empty Content
      <hr />
    </slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotComp",
};
</script>

<style scoped>
div {
  margin: 16px;
  padding: 16px;
  border: 1px solid black;
}
</style>
