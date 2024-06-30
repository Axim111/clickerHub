
import { GoogleGenerativeAI } from '@google/generative-ai';
import { IMyContext } from '../types/session.js';
export const GPTUtil = async(ctx:IMyContext, prompt:string)=>{
  const genAI = new GoogleGenerativeAI(process.env.AI_KEY||"")
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  ctx.reply(text);
}
