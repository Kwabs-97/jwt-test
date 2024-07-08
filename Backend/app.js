import express from "express";
import { client } from "./config/postgresDB.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

try {
  await client.connect();
  console.log("connected to db successfully");
} catch (error) {
  console.log(error);
}

app.listen(port, async () => {
  console.log(`server is listening on ${port}`);
});
