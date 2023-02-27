import dotenv from "dotenv";
dotenv.config();

export default {
  mongoUri: process.env.MONGO_URI,
  port: 8000,
  jwtSecret: "Secret Key",
};
