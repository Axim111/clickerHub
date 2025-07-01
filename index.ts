import { api } from './api/api.js'
import { start } from './middleware/startMiddleware.js'

import { profileAction } from './middleware/startAction/profileAction.js'
import { imgToTextAction } from './middleware/startAction/utilAction/img-to-text/imgToTextAction.js'
import { utilAction } from './middleware/startAction/utilAction.js'

import 'dotenv/config'

import { gptAction } from './middleware/startAction/utilAction/gpt/gptAction.js'
import { payPRO } from './middleware/startAction/payment.js'
import {} from './types/environment.js'
import { cronWorkDay } from './utils/cronWorkDay.js'
api()

start()

payPRO()
profileAction()
utilAction()

gptAction()
imgToTextAction()
// cronWorkDay()
