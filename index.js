/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Dani"
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa, this is cool";
    }
  }
};

Vue.createApp(App).mount("#app");
