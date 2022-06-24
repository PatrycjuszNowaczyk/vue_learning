let vm = Vue.createApp({
  data() {
    return {
      url: "https://www.w3schools.com/",
      name: "page",
    };
  },
  methods: {
    changeUrl() {
      this.url = "https://www.google.com/";
      window.open(this.url, "_blank");
    },
  },
});
vm.mount("#app");
