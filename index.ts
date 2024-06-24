import express from "express"

import {bot} from "./connect/bot.js"
import {api} from "./api/api.js"
import {start} from "./middleware/startMidleware.js"

import 'dotenv/config'


api()


start()



