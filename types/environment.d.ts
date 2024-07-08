export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string
      TEST_PAY: string
      BOT_WEBHOOK: string
      DATABASE_URL: string
      AI_KEY: string
      PORT: string
      MODE: string
      WEB_APP: string
    }
  }
}
