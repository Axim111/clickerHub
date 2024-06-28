import express from "express"
import { Composer, Scenes, Telegraf, session, Markup } from "telegraf"
import {bot} from "./connect/bot.js"
import {api} from "./api/api.js"
import {start} from "./middleware/startMiddleware.js"
import {ocr} from "./utils/ocr.js"

import { profileAction } from './middleware/startAction/profileAction.js';
import { imgToTextAction } from './middleware/startAction/utilAction/img-to-text/imgToTextAction.js';
import { utilAction } from './middleware/startAction/utilAction.js';

import 'dotenv/config'

import { createWorker } from 'tesseract.js';
import { backAction } from './middleware/backActin.js';
import { VMyContext } from "./types/session.js"


// const res = await ocr()
// console.log(res)




api()



start()

backAction()


profileAction()
utilAction()
imgToTextAction()


