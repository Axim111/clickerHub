import express from "express"
import { Composer, Scenes, Telegraf, session, Markup } from "telegraf"
import {bot} from "./connect/bot.js"
import {api} from "./api/api.js"
import {start} from "./middleware/startMiddleware.js"

import { profileAction } from './middleware/startAction/profileAction.js';
import { imgToTextAction } from './middleware/startAction/utilAction/img-to-text/imgToTextAction.js';
import { utilAction } from './middleware/startAction/utilAction.js';

import 'dotenv/config'

import { createWorker } from 'tesseract.js';

import { VMyContext } from "./types/session.js"
import { gptAction } from './middleware/startAction/utilAction/gpt/gptAction.js';

api()

start()

profileAction()
utilAction()

gptAction()
imgToTextAction()


