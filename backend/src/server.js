import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import {inngest, functions} from "./lib/inngest.js";
import { clerkMiddleware , requireAuth} from '@clerk/express';
import { protectRoute } from "./middleware/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoute from "./routes/sessionRoute.js";


const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());

app.use(clerkMiddleware())  // this add auth field to request object req.auth()

// credentials:true means => server allows a browser to include cookies on request .allow cookies to be sent in cross-origin requests. This is necessary when your frontend and backend are on different domains or ports, and you want to maintain user sessions or authentication state using cookies. 

app.use(cors({
  origin:ENV.CLIENT_URL,
  credentials:true
}));



app.use("/api/inngest", serve({client:inngest, functions}));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoute);

app.get("/health",requireAuth() ,(req,res) => {
  res.status(200).json({msge:"health"});
})

// when you pass an array of middleware to Express, it automatically flattens and executes them sequentially, one by one
app.get("/video-calling", protectRoute ,(req,res) => {
  res.status(200).json({msge:"video calling"})
})




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
