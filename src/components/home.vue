<template>
  <div>
    <h4>This is the home page</h4>
    <p>bcz why not</p>
    <h1 v-if="test === true">if</h1>
    <h1 v-else-if="test === 123">else if</h1>
    <h1 v-else>else</h1>
    <div v-for="loop in 10">
      {{loop}}
    </div>
  </div>
  
</template>

<script >
export default {
  name: 'home',
  data() {
    return {
      test: !true,
      looper: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scoped>
  
</style>