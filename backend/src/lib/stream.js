import {StreamChat} from 'stream-chat';
import {ENV} from "./env.js";
import {StreamClient} from "@stream-io/node-sdk";

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret) {
  console.error("Stream_API_KEY or Stream_API_SECRET is missing")
}

export const streamClient = new StreamClient
(apiKey,apiSecret); // will be used for video calls

// Ye line ek Stream Chat client object create karti hai jo tumhare backend ko Stream ke servers se connect karta hai.
export const chatClient =  StreamChat.getInstance(apiKey, apiSecret); // this is for chat features

// upsert means to update and create the user
export const upsertStreamUser = async(userData) => {
  try {
    await chatClient.upsertUsers([userData]);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error
  }
}

export const deleteStreamUser = async(userId) => {
  try {
    await chatClient.deleteUsers([userId]);
    console.log("Stream user deleted successfull", userId)
  } catch (error) {
    console.error("Error deleting Stream user:", error);
    throw error
  }
}


// todo: add another method to generateToken