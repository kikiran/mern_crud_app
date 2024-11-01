import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Succesffully connect with ", conn.connection.host);
  } catch (error) {
    console.log("There is problem with connect Database");
    process.exit(1);
  }
};
