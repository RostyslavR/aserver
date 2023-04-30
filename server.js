require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { PORT } = process.env || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
