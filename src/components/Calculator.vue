<template></template>

<script>
export default {
    data () {
    return {
      weight: '',
      height: '',
      result: 'Click "Calculate"'
    }
  },
  methods: {
    calculate() {
      let weight = parseFloat(this.weight)
      let height = parseFloat(this.height) / 100
      this.result = weight / (height * height)
    }
  }
})
};
</script>

<style></style>
