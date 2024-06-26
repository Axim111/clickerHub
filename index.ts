import express from "express"
import { Composer, Scenes, Telegraf, session, Markup } from "telegraf"
import {bot} from "./connect/bot.js"
import {api} from "./api/api.js"
import {start} from "./middleware/startMiddleware.js"


import { profileAction } from './middleware/startAction/profileAction.js';
import { apiAction } from './middleware/startAction/apiAction.js';

import 'dotenv/config'


api()


start()

profileAction()
apiAction()
