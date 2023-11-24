<template>
  <div class="container">
    <h1>v-for</h1>
    <ul>
      <li v-for="(item, index) in dataArr" :key="index">
        ชื่อ {{ item.name }} อายุ {{ item.age }} ตำแหน่ง {{ item.department }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ForView",
  data() {
    return {
      dataArr: [
        { name: "serena", age: 25, department: "การตลาด" },
        { name: "satoshi", age: 25, department: "โปรแกรมเมอร์" },
        { name: "go", age: 25, department: "ฝ่ายขาย" },
      ],
    };
  },
};
</script>

<style></style>
