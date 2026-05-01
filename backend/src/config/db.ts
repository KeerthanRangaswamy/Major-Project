import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (!process.env.MONOGDB_URI) {
      console.log("MONOGDB_URI is not set; running backend in demo mode without MongoDB.");
      return;
    }

    await mongoose.connect(process.env.MONOGDB_URI as string);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    console.log("Could Not Connect to the Database. Continuing in demo mode.");
  }
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Database Disconnected!");
  process.exit(0);
});
