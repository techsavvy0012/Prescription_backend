import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"
import hpp from "hpp";

import router from "./app/router";

dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

/** App configuration */
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: "*"
}));
app.use(hpp());

router(app);

app.listen(port || 3000, () => {
  return console.log("Server :: running on " + port);
});

export default app;