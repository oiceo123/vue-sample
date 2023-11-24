<template>
  <div class="container">
    <h1>v-slot</h1>
    <slot-comp>
      <template v-slot:header>
        <h1>Header Slot 1</h1>
      </template>
      <div>
        <hr />
        <p>Content Slot 1</p>
        <p>Content Slot 1</p>
        <p>Content Slot 1</p>
        <hr />
      </div>
      <template v-slot:footer>
        <p>Footer Slot 1</p>
      </template>
    </slot-comp>

    <SlotComp>
      <template #header>
        <h1>Header Slot 2</h1>
      </template>
      <div>
        <hr />
        <p>Content Slot 2</p>
        <p>Content Slot 2</p>
        <p>Content Slot 2</p>
        <hr />
      </div>
      <template #footer>
        <p>Footer Slot 2</p>
      </template>
    </SlotComp>
  </div>
</template>

<script>
import SlotComp from "@/components/slotComp.vue";
export default {
  name: "SlotView",
  components: {
    SlotComp,
  },
};
</script>

<style></style>
