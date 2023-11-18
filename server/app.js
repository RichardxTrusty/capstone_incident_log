const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("knex")(require("./knexfile"));

app.use(express.json());

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
