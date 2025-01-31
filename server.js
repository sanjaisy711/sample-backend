const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form data
app.post("/submit", (req, res) => {
  const { field1, field2, field3, field4 } = req.body;
  console.log("Received data:", { field1, field2, field3, field4 });
  res.json({ message: "Data received successfully!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
