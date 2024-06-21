"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const telegraf_1 = require("telegraf");
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const bot = new telegraf_1.Telegraf(`${process.env.BOT_TOKEN}`);
bot.start((ctx) => ctx.reply('Welcome'));
const WEBHOOK_URL = `${process.env.BOT_WEBHOOK}`;
const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const setWebhook = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
});
bot.launch(),
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
app.listen(8443, () => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Server running on port 3000");
    yield setWebhook();
}));
