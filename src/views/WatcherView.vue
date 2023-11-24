<template>
  <div class="container">
    <h1>Watcher</h1>
    <div class="block">
      <h3>Basic</h3>
      <input type="range" min="0" max="100" step="1" v-model="rangeVal" />
      <p class="text-center">
        {{ rangeVal }}
      </p>
    </div>
    <br /><br />
    <div class="block">
      <h3>New and Old Values</h3>
      <div class="tab mx-auto mb-2" v-on:click="updatePos"></div>
      <p class="text-center">{{ xDiff }}</p>
    </div>
    <br /><br />
    <div class="block">
      <label>
        <p>Type a valid e-mail address:</p>
        <input type="email" v-model="inpAddress" />
      </label>
      <p v-bind:class="myClass">
        {{ feedbackText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatcherView",
  data() {
    return {
      rangeVal: 70,
      xPos: 0,
      xDiff: 0,
      inpAddress: "",
      feedbackText: "",
      myClass: "invalid",
    };
  },
  watch: {
    rangeVal(val) {
      if (val > 20 && val < 60) {
        if (val < 40) {
          this.rangeVal = 20;
        } else {
          this.rangeVal = 60;
        }
      }
    },
    xPos(newVal, oldVal) {
      this.xDiff = newVal - oldVal;
    },
    inpAddress(newVal, oldVal) {
      if (!newVal.includes("@")) {
        this.feedbackText = "The e-mail address is NOT valid";
        this.myClass = "invalid";
      } else if (!oldVal.includes("@") && newVal.includes("@")) {
        this.feedbackText = "Perfect! You fixed it!";
        this.myClass = "valid";
      } else {
        this.feedbackText = "The e-mail address is valid :)";
      }
    },
  },
  methods: {
    updatePos(evt) {
      this.xPos = evt.offsetX;
    },
  },
};
</script>

<style scoped>
.tab {
  width: 200px;
  height: 50px;
  border: solid black 1px;
  background-color: lightgreen;
}
.block {
  border: dashed black 1px;
  display: inline-block;
  padding: 10px;
}
.valid {
  color: green;
}
.invalid {
  color: red;
}
</style>
