/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      todos: [],
      title: "",
      userId: ""
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    createTodo: function () {
      // send an axios post request to create a new todo
      var params = {
        userId: this.userId,
        title: this.title,
        completed: false
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", params)
        .then((response) => {
          console.log(response.data);
          this.todos.unshift(response.data);
          this.title = "";
          this.userId = "";
        });
    }
  }
};

Vue.createApp(App).mount("#app");
