import { bannerRoute } from "./route/bannerRoute.js";
import { connectDb } from "./utils/utils.js";
import express from 'express'
import cors from 'cors'

// connectDb();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/banner' , bannerRoute);

app.get('/' , async(req, res) => {
  res.send({"Message" : "running Successfully"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});

