import { IMyContext } from '../../types/session.js';
import {prisma} from './../../connect/db.js';
//добавляет/обновляет/возвращает пользователя | и всё в ctx.session помещается
await prisma.user.deleteMany()
export const registration =async(ctx:any)=>{
try{
  const maybeUser = await prisma.user.findUnique({
    where:{
      login:ctx.from.id.toString()
    }
  })
  
  if(maybeUser==null){
    const user = await prisma.user.create({
      data:{
        login: ctx.from.id.toString(),
        username:ctx.from.first_name,
      }
    })
     ctx.session.user=user
    
    return user
  }
  
  if(maybeUser.username != ctx.from.first_name){
    const user = await prisma.user.update({
      where: {
        login:ctx.from.id.toString()
      },
      data: {
        username:ctx.from.first_name,
      },
    })
    ctx.session.user=user

    return user
  }
  ctx.session.user=maybeUser
  
  return maybeUser

}

catch(e){
  console.log(e)
}

}
  