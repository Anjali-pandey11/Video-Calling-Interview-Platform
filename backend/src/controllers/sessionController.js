import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req, res)  {
  try {
    const {problem, difficulty} = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if(!problem || !difficulty){
      return res.status(400).json({message:"Problem and difficulty are required"});
    }

    // generate unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // create session in DB

    const session = await Session.create({problem, difficulty, host:userId, callId});

    // create stream video call
    await streamClient.video.call("default", callId).getOrCreate({
      data:{
        created_by_id:clerkId,
        custom:{problem, difficulty, sessionId:session._id.toString()}
      }
    });

    // chat messaging

    const channel =  chatClient.channel("messaging",callId,{
      name:`${problem} Session`,
      created_by_id:clerkId,
      memebers:[clerkId]
    })

    await channel.create();

     res.status(201).json({session:session})

  } catch (error) {
    console.error("Error in createSession Controller: ", error.message); 
    res.status(500).json({message:"Internal Server Error"});
  }
}

export async function getActiveSessions(_, res){
   try {

     const sessions = await Session.find({status:"active"})
     .populate("host","name profileImage email clerkId")
     .sort({createdAt:-1})
     .limit(20);

     res.status(200).json({sessions})

   } catch (error) {
     console.error("Error in getActiveSessions Controller: ", error.message); 
     res.status(500).json({message:"Internal Server Error"});
   }
   }


export async function getMyRecentsessions(req, res) {

}

export async function getSessionById(req, res){

}

export async function joinSession(req, res){

}

export async function endSession(req, res){

}