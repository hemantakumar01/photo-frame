import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL!, {
      dbName: "photo-frame",
    });
    console.log("Connected to ", connection.port);
  } catch (error) {
    console.log(error);
  }
};
