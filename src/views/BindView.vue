<template>
  <div class="container">
    <!-- interpolation -->
    <h1>{{ header }}</h1>

    <!-- full syntax -->
    <img v-bind:src="url" width="300" height="200" />

    <!-- shorthand -->
    <div :style="{ fontSize: size + 'px' }">Text example</div>
    <div :style="{ 'font-size': size + 'px' }">Text example</div>
    <div :class="myClass">myClass</div>
    <div :class="{ my_class: isMyClass }">myClass</div>
    <div :class="isMyClass ? 'my_class' : ''">myClass</div>
  </div>
</template>

<script>
export default {
  name: "BindView",
  data() {
    return {
      header: "v-bind",
      size: 24,
      myClass: "my_class",
      isMyClass: true,
      url: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
  },
};
</script>

<style>
.my_class {
  border: 2px solid black;
  color: green;
  font-size: 24px;
}
</style>
