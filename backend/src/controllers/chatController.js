import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res) {
  try {
    // why we don't use mongoDB _id as clerkId because in stream we save the with clerkId 
    const token = chatClient.createToken(req.user.clerkId)
   

    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image
    })
  } catch (error) {
    console.log("erro in getStreamToken",error.message);
    res.status(500).json({msg:"Internal error"});
  }  
}