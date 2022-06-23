<template>
  <h1>Counter</h1>
  <p>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
  },
};
</script>
