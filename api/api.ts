import express from "express"

import {bot} from "../connect/bot.js"


import 'dotenv/config'

const api = async() =>{
   const  app = express();
   
  app.use(express.json());
  
  
  
  
  app.use(await bot.createWebhook({ domain: `${process.env.BOT_WEBHOOK}` }));
  
  
  app.get("/", (req, res) => {
    res.send("Hello World!"); 
  });
  
  app.listen(3000, async () => {
    
    console.log("Server running on port 8443 and bot...maybe");
  
  });
  
}

export {api}