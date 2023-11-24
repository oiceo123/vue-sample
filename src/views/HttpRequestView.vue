<template>
  <div class="container">
    <h1>http request</h1>
    <!-- Fetch -->
    <div class="border border-black p-4 m-4">
      <h2>Fetch</h2>
      <button class="btn btn-primary" @click="fetchData">ดึงข้อมูล</button>
      <div v-if="data">
        <div
          v-for="(user, index) in data"
          :key="index"
          class="border p-3 m-3 text-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            class="border border-black rounded-circle mb-3"
            style="width: 10%"
          />
          <p>name: {{ user.name }}</p>
          <p>department: {{ user.position }}</p>
        </div>
      </div>
    </div>
    <!-- Axios -->
    <div class="border border-black p-4 m-4">
      <h2>Axios Fetch</h2>
      <button class="btn btn-primary" @click="axiosFetchData">ดึงข้อมูล</button>
      <div v-if="axiosData">
        <div
          v-for="(user, index) in axiosData"
          :key="index"
          class="border p-3 m-3 text-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
            class="border rounded-circle mb-3"
            style="width: 10%"
          />
          <p>name: {{ user.name }}</p>
          <p>department: {{ user.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HttpRequestView",
  data() {
    return {
      data: null,
      axiosData: null,
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("http://localhost:3001/employees");
      this.data = await res.json();
    },
    async axiosFetchData() {
      const res = await axios.get("http://localhost:3001/employees");
      this.axiosData = res.data;
    },
  },
};
</script>

<style></style>
