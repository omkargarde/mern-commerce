const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://omyagarde:superman123@cluster0.abxc8yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const PORT = process.env.PORT || 6000;
mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    if (err.name === "MongoTimeoutError") {
      console.log(
        "Timeout error. Please check your network connection and MongoDB Atlas status."
      );
    }
  });
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  `Server is running on Port ${PORT}`;
});
