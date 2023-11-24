<template>
  <div class="container">
    <h1>v-model</h1>
    <!-- form (Event Modifier) -->
    <form @submit.prevent="submitForm" class="border p-3">
      <!-- input -->
      <div>
        <label for="name" class="form-label">ชื่อพนักงาน</label>
        <input type="text" class="form-control" v-model="employee.name" />
        <label for="salary" class="form-label">เงินเดือน</label>
        <input type="number" class="form-control" v-model="employee.salary" />
      </div>
      <!-- Select -->
      <div>
        <label for="department" class="form-label">ตำแหน่งงาน</label>
        <select class="form-select" v-model="employee.department">
          <option value="ฝ่ายการตลาด">ฝ่ายการตลาด</option>
          <option value="ฝ่ายการเงิน">ฝ่ายการเงิน</option>
          <option value="ฝ่ายขาย">ฝ่ายขาย</option>
        </select>
      </div>
      <!-- Radio -->
      <div class="mb-2">
        <p class="mb-2">เพศ</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="ชาย"
            v-model="employee.gender"
          />
          <label class="form-check-label" for="gender-name">ชาย</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="หญิง"
            v-model="employee.gender"
          />
          <label class="form-check-label" for="gender-name">หญิง</label>
        </div>
      </div>
      <!-- Checkbox -->
      <div>
        <p class="mb-2">ทักษะด้านภาษา</p>
        <div>
          <input type="checkbox" value="ภาษาอังกฤษ" v-model="employee.skill" />
          <label class="ms-2" for="skill">ภาษาอังกฤษ</label>
        </div>
        <div>
          <input type="checkbox" value="ภาษาจีน" v-model="employee.skill" />
          <label class="ms-2" for="skill">ภาษาจีน</label>
        </div>
        <div>
          <input type="checkbox" value="ภาษาญี่ปุ่น" v-model="employee.skill" />
          <label class="ms-2" for="skill">ภาษาญี่ปุ่น</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-4 w-100">
        บันทึกข้อมูล
      </button>
    </form>
    <!-- show input data -->
    <div class="mt-3">
      <h4>Show input data</h4>
      <p>ชื่อ: {{ employee.name }}</p>
      <p>เงินเดือน: {{ employee.salary }}</p>
      <p>ตำแหน่งงาน: {{ employee.department }}</p>
      <p>เพศ: {{ employee.gender }}</p>
      <p>ทักษะด้านภาษา: {{ employee.skill }}</p>
    </div>
    <!-- show employee list -->
    <h4>Employee list:</h4>
    <ul>
      <li v-for="(emp, index) in employeeList" :key="index">
        {{ emp.name }}, {{ emp.salary }}, {{ emp.department }},
        {{ emp.gender }}, {{ emp.skill }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ModelView",
  data() {
    return {
      employee: {
        name: "",
        salary: 0,
        department: "ฝ่ายการตลาด",
        gender: "",
        skill: [],
      },
      employeeList: [],
    };
  },
  methods: {
    submitForm() {
      const newEmployee = {
        name: this.employee.name,
        salary: this.employee.salary,
        department: this.employee.department,
        gender: this.employee.gender,
        skill: this.employee.skill,
      };
      this.employeeList.push(newEmployee);
      this.resetForm();
    },
    resetForm() {
      this.employee.name = "";
      this.employee.salary = 0;
      this.employee.department = "ฝ่ายการตลาด";
      this.employee.gender = "";
      this.employee.skill = [];
    },
  },
};
</script>

<style scoped>
h4 {
  margin-bottom: 20px;
}
</style>
