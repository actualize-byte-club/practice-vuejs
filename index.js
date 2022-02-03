/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Dani",
      fruits: ["apple", "banana", "cantaloupe", "grapes", "figs"],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa, this is cool";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
};

Vue.createApp(App).mount("#app");
