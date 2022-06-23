let vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      lines: [],
      age: 18,
    };
  },
  methods: {
    createButton(inner) {
      let button = document.createElement("button");
      button.innerText = inner || "Click me";
      return button;
    },
    addLine() {
      let newLine = document.querySelector("#newLine").cloneNode(true);
      newLine.removeAttribute("id");
      if (newLine.innerText.split(" ").length > 2) {
        console.error("There is some error at line");
      } else if (newLine.innerText.split(" ").length == 2) {
        this.firstName = "";
        this.lastName = "";
        this.lines.push(newLine.innerText);
      }
    },
    validate(e) {
      if (e.target.value.split(" ").length > 1) {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
        return false;
      } else if (e.target.value.length > 0) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        return true;
      } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.remove("is-valid");
        return false;
      }
    },
  },
});
vm.mount("#app");
