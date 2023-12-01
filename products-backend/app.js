const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// routes
app.get("/add", (req, res) => {
  res.send("add product...");
});

// Server initialization
app.listen(port, () => {
  console.log(`Products Server is runnig on port: ${port}`);
});
