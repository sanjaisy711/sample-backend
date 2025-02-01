const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: "https://main.d3tym2jx46vmte.amplifyapp.com",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(bodyParser.json());

// Route to handle form data

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req, res) => {
  const { field1, field2, field3, field4 } = req.body;
  console.log("Received data:", { field1, field2, field3, field4 });
  res.json({ message: "Data received successfully!" });
});

// Start the server

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
