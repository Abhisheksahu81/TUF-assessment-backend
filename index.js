import { bannerRoute } from "./route/bannerRoute.js";
import { connectDb } from "./utils/utils.js";
import express from 'express'
import { configDotenv } from "dotenv";

const dotenv = configDotenv();

// connectDb();
const app = express();
app.use(express.json());

app.use('/banner' , bannerRoute);

const PORT = dotenv.parsed.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});

