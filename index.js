const assert = require('assert');
const cron = require('node-cron');

const SlackBot = require('slackbots');

const {
  CHANNEL,
  SLACK_TOKEN,
  TIME
} = process.env;

['CHANNEL', 'SLACK_TOKEN'].forEach(env => {
  assert(process.env[env], `process.env.${env} is not defined!`);
});

const bot = new SlackBot({
    token: SLACK_TOKEN,
    name: 'standup-bot'
});

const params = {
  icon_emoji: ':dance:'
};

cron.schedule(`0 ${TIME || 12} * * 1-5`, () => {
  bot.postMessage(CHANNEL, `<!here> Stand up - ${new Date().toLocaleDateString("en-US")}`, params);
});