import dotenv from "dotenv";
dotenv.config();

export default {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 8001,
  jwtSecret: "Secret Key",
};
