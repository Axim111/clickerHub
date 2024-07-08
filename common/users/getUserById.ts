import { IMyContext } from '../../types/session.js'
import { prisma } from './../../connect/db.js'
export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        login: id,
      },
    })
    return user
  } catch (e) {
    console.log(e)
  }
}
