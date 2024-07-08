import { Composer, Context, Markup, Scenes, session, Telegraf } from 'telegraf'

import { User } from '@prisma/client'
interface SessionData {
  user: User | any
  callbackMessage: string
  language: string
}

export interface IMyContext extends Context {
  session: SessionData
}

interface MyWizardSession extends Scenes.WizardSessionData {
  myWizardSessionProp: number
}

export interface VMyContext extends Context {
  myContextProp: string

  scene: Scenes.SceneContextScene<VMyContext, MyWizardSession>
  wizard: Scenes.WizardContextWizard<VMyContext>
}
