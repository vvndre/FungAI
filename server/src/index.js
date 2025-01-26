const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Fung.ai is running"));

// // Connect to MongoDB
// const connect = async () => {
//   try {
//     await mongoose
//       .connect(process.env.MONGO)
//       .then(() => console.log("MongoDB connected"));
//   } catch (err) {
//     console.log(err);
//   }
// };

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
