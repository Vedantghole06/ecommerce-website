import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import foodRoutes from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ecommerce-website",
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit if DB fails
  }
};

// App setup
const app = express();
const port = process.env.PORT || 4000;

// CORS config
const corsOptions = {
  origin: ['https://ecom-sv-frontend.vercel.app/', 'https://ecom-sv-admin.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Use properly once
app.use(express.json());    // JSON body parser
app.use(express.static('upload')); // Serve static images if needed

// Test route
app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

// Routes
app.use("/api/food", foodRoutes);
app.use("/api/data", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Connect DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
