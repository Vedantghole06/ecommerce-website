import mongoose from "mongoose";

dotenv.config();
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'ecommerce-website',
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};