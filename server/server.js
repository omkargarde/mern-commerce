import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://omyagarde:mongomern@cluster0.tktzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((error) => console.error(error));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://127.0.0.1:5173/",
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
