import express from "express";
import { client } from "./config/postgresDB.js";
import bodyParser from "body-parser";
import router from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(router);

try {
  await client.connect();
  console.log("connected to db successfully");
} catch (error) {
  console.log(error);
}

app.listen(port, async () => {
  console.log(`server is listening on ${port}`);
});
