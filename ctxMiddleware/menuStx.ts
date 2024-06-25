const menuStc = (stx:any,Markup:any) =>{
  stx.reply("start", Markup.inlineKeyboard([
    [Markup.button.callback("Text-1", "Data-1")],
  ]))
}
export {menuStc}