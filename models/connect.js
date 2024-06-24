import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`Server connected to database @${conn.connection.host}:${conn.connection.port}`);
    } catch (err) {
        console.log(`Error occured: ${err.message}`);
        process.exit(1);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Database connection distorted!");
});