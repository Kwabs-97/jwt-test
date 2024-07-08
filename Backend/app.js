import express from "express";
import { client } from "./config/postgresDB.js";

const app = express();
const port = process.env.PORT;
try {
  await client.connect();
  console.log("connected to db successfully");
} catch (error) {
  console.log(error);
}

app.listen(port, async () => {
  console.log(`server is listening on ${port}`);
});
