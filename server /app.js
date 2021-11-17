const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");

const port = 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Express departing now from http://localhost:${port}`)
);

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// const resultsPage = [];

// app.get("/", (req, res) => res.send("This is the Homepage"));

// app.post("/", (req, res) => {
//   res.status(405).send("not allowed");
// });

// module.exports = app;
