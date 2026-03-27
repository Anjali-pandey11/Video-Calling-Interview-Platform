import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express';
import User from '../models/User.js';

export const protectRoute =  [
  requireAuth(),
  async (req, res, next) => {
    
    try {
      const clerkId = req.auth().userId;

      if(!clerkId) return res.status(401).json({msg:"unauthorized-invalid token"})

      // find user in db by clerk ID
      const user = await User.findOne({
        clerkId: clerkId
      })

      if(!user) return res.status(404).json({msg:"user not found"});

      req.user = user;  // add user to request object
      next()
      

    } catch (error) {
       console.error("error in protect route middleware", error);

       res.status(500).json({msg:"server error"});
       
    }
  }
]