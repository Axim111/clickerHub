import { Markup } from 'telegraf'
import { IMyContext } from '../../types/session.d.js'
export const keyboardStart = async (ctx: IMyContext, text: string) => {
  await ctx.reply(
    text,
    Markup.keyboard([
      [
        '/start',
        Markup.button.webApp(
          'web',
          process.env.WEB_APP + '/' + ctx.session.user.login
        ),
      ], //https://twa-bot-clicker.netlify.app
    ])
      .oneTime()
      .resize()
  )
}
