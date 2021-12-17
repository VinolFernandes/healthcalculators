<template>
  <div id="app">
    <header class="container">
      <h1>RPN Calculator</h1>
      <small>Write your height and height and click <em>calculate</em></small>
    </header>
    <main class="container">
      <div class="form-horizontal">
        <div class="col-xs-12 form-group">
          <label for="weight" class="col-xs-4 control-label"
            >weight <em>(in kg)</em></label
          >
          <div class="col-xs-8">
            <input
              v-model="weight"
              id="weight"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-xs-12 form-group">
          <label for="height" class="col-xs-4 control-label"
            >height <em>(in cm)</em></label
          >
          <div class="col-xs-8">
            <input
              v-model="height"
              id="height"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-block" @click="calculate">
            Calculate
          </button>
        </div>
      </div>
      <div class="result">
        <span>Ant the result is...</span>
        <em>{{ result }}</em>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      height: "",
      result: 'Click "Calculate"',
    };
  },
  methods: {
    calculate() {
      let weight = parseFloat(this.weight);
      let height = parseFloat(this.height) / 100;
      this.result = weight / (height * height);
    },
  },
};
</script>

<style></style>
