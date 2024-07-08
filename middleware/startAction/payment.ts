import { buyPRO } from "../../common/users/buyPRO.js";
import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';
export const payPRO = async() =>{
  bot.action("buy PRO", async(ctx)=>{

    const getInvoice = (id:Number) => {
      const invoice = {
        chat_id: id, 
        provider_token: process.env.TEST_PAY, 
        start_parameter: 'get_access', 
        title: 'InvoiceTitle',
        description: 'InvoiceDescription', 
        currency: 'RUB',
        prices: [{ label: 'Invoice Title', amount: 100 * 100 }],
        payload: "!23"
      }
    
      return invoice
    }
    return ctx.replyWithInvoice(getInvoice(ctx.from.id))
    
  })
bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true)) // response to a preliminary request for payment
    bot.on('successful_payment', async (ctx, next) => { // reply in case of positive payment
      await buyPRO(ctx)
    })
}

//1111 1111 1111 1026, 12/22, CVC 000