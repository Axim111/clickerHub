import { CronJob } from 'cron'

export const cronWorkDay = () =>
  new CronJob(
    '* * *', // cronTime
    function () {
      
    }, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
  )
