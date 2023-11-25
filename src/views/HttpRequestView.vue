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
    <div class="container">
      <h1>Employee Information</h1>
      <div>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label"> Name: </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label"> Age: </label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter age"
              @input="setAge"
            />
          </div>
          <div class="mb-3">
            <label for="country" class="form-label"> Country: </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter country"
              v-model="country"
            />
          </div>
          <div class="mb-3">
            <label for="position" class="form-label"> Position: </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter position"
              v-model="position"
            />
          </div>
          <div class="mb-3">
            <label for="wage" class="form-label"> Wage: </label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter wage"
              @input="setWage"
            />
          </div>
          <button class="btn btn-success" @click.prevent="addEmployee">
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div>
        <div class="d-flex">
          <button class="btn btn-primary" @click="getEmployees">
            Show all employees
          </button>
          <div class="ms-auto d-flex">
            <input
              type="text"
              class="form-control"
              placeholder="Search ID"
              @input="setId"
            />
            <button
              class="btn border border-black"
              @click="getEmployeeById(id)"
            >
              Search
            </button>
          </div>
        </div>
        <br />
        <br />

        <div class="card" v-for="(val, index) in employeeList" :key="{ index }">
          <div class="card-body text-left">
            <p class="card-text">Name: {{ val.name }}</p>
            <p class="card-text">Age: {{ val.age }}</p>
            <p class="card-text">Country: {{ val.country }}</p>
            <p class="card-text">Position: {{ val.position }}</p>
            <p class="card-text">Wage: {{ val.wage }}</p>
            <div class="d-flex">
              <input
                type="number"
                class="form-control"
                style="width: 300px"
                placeholder="15000..."
                @input="setNewWage"
              />
              <button
                class="btn btn-warning"
                @click="updateEmployeeWage(val.id)"
              >
                Update
              </button>
              <button class="btn btn-danger" @click="deleteEmployee(val.id)">
                Delete
              </button>
            </div>
          </div>
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
      id: 1,
      name: "",
      age: 0,
      country: "",
      position: "",
      wage: 0,
      newWage: 0,
      employeeList: [],
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
    setId(event) {
      this.id = event.target.value;
    },
    setAge(event) {
      this.age = event.target.value;
    },
    setWage(event) {
      this.wage = event.target.value;
    },
    setNewWage(event) {
      this.newWage = event.target.value;
    },
    getEmployees() {
      axios.get("http://localhost:3001/employees").then((res) => {
        this.employeeList = res.data;
      });
    },
    getEmployeeById(id) {
      // แบบใส่ query params เข้าไปใน url
      axios.get(`http://localhost:3001/employees?id=${id}`).then((res) => {
        this.employeeList = res.data;
      });
    },
    addEmployee() {
      const payload = {
        name: this.name,
        age: this.age,
        country: this.country,
        position: this.position,
        wage: this.wage,
      };

      axios.post("http://localhost:3001/create", payload).then(() => {
        this.employeeList = [
          ...this.employeeList,
          {
            name: this.name,
            age: this.age,
            country: this.country,
            position: this.position,
            wage: this.wage,
          },
        ];
      });
    },
    updateEmployeeWage(id) {
      // put หรือ patch ก็ได้ขึ้นอยู่กับว่า server ตั้งไว้เป็น method อะไร
      axios
        .put("http://localhost:3001/update", { wage: this.newWage, id: id })
        .then(() => {
          this.employeeList = this.employeeList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: this.newWage,
                }
              : val;
          });
        });
    },
    deleteEmployee(id) {
      axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
        this.employeeList = this.employeeList.filter((val) => {
          return val.id !== id;
        });
      });
    },
  },
};
</script>

<style></style>
