import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import Adminrouter from "./routes/rightfullAdmin.routes.js";
import PaymentRouter from "./routes/payment.routes.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);



app.use("/admin", Adminrouter)
app.use("/payment", PaymentRouter)


export default app