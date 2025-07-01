import { prisma } from '../connect/db.js'

export const giveMoney = async () => {
  const users = await prisma.user.findMany({})
  console.log(users)
  for (let user of users) {
    if (user.scoreMoney < 1000) {
      
    }
  }
}
