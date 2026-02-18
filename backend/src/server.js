import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import {inngest, functions} from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());

// credentials:true means => server allows a browser to include cookies on request .allow cookies to be sent in cross-origin requests. This is necessary when your frontend and backend are on different domains or ports, and you want to maintain user sessions or authentication state using cookies. 
app.use(cors({
  origin:ENV.CLIENT_URL,
  credentials:true
}));


app.use("/api/inngest", serve({client:inngest, functions}));


app.get("/health", (req,res) => {
  res.status(200).json({msge:"health"})
})

app.get("/book", (req,res) => {
  res.status(200).json({msge:"book"})
})

// make our app ready for deployment
if(ENV.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
})
}

const startServer = async() => {
  try {
     await connectDB();
     app.listen(ENV.PORT, () => {
  console.log("server is running on port",ENV.PORT);
})
  } catch (error) {
    console.error("💡Error starting the server", error);
  }
}

startServer();