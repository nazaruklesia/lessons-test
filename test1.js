const axios = require("axios");

axios.get("http://localhost:3000/todos")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching todos:", error.message);
  });
