import { Context, session, Telegraf } from "telegraf";
import { User } from '@prisma/client';
interface SessionData {
	user: User|any;
}

export interface IMyContext extends Context {
	session: SessionData;
}
//идут в инициализацию бота (new) + ctx аргументе