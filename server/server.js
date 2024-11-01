import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import products from "./routes/products.js";
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", products);

app.listen(port, () => {
  connectDB(), console.log(`The application is running on Port ${port}`);
});
