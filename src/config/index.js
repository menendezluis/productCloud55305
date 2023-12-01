import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
};
