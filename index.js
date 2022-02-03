/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Dani"
    };
  }
};

Vue.createApp(App).mount("#app");
