let vm = Vue.createApp({
  data() {
    return {
      age: 18,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    decrement() {
      this.age--;
    },
  },
});
vm.mount("#app");
