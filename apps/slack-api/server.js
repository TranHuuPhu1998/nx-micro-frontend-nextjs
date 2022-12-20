const { App } = require('@slack/bolt');
const express = require('express');

const expressApp = express();

const SLACK_BOT_TOKEN =
  'xoxb-4513660088579-4525818948996-EWTWvRnu3KVRwcE6WguZDedq';
const SLACK_APP_TOKEN =
  'xapp-1-A04FFPSDGGL-4547407668144-caf669d0e1e427108174d0b46dede66d6f40f05ed7380acd269a6475b53f98d7';

const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: 'ce8e11b258edd573e9a405974c19f668',
  socketMode: true,
  appToken: SLACK_APP_TOKEN,
  signatureVerification: 'WTLfpUgW8iRfcc8xWk0CO4KO',
  clientId: 'A04FFPSDGGL',
  clientSecret: '4513660088579.4525808458564',

  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
});

expressApp.post('/send-message', (request, response) => {
  return 'hello';
});

expressApp.get('/', (request, response) => {
  return 'hello';
});

const PORT = process.env.PORT || 5000;

expressApp.listen(PORT, () => {
  // await app.start();
  console.log('express is running port', process.env.PORT || 4444);
});
