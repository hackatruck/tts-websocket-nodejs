var config = require('./config');
var WebSocket = require('ws');

var voice = config.voice ||  "en-US_AllisonVoice";
console.log("voice:" + voice);
var token = config.token || "";
console.log("token:" + token);
var wsURI = 'wss://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?voice=' +
  voice + '&watson-token=' + token + '&timmings=[words] ';
console.log("WebSocket URI:" + wsURI);
var websocket = new WebSocket(wsURI);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function(evt) { onClose(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };

function onOpen(evt) {
  console.log("WebSocket Opened - synthesize a text message");
  var message = {
    text: 'Hello world',
    accept: '*/*'
  };
  websocket.send(JSON.stringify(message));
}

var messages;
var audioStream;

function onMessage(evt) {
  if (typeof evt.data === "string") {
    console.log("Received string data in the websocket");
    console.log(evt.data);
    messages += evt.data;
  } else {
    console.log('Received ' + evt.data.byteLength + ' binary bytes');
    console.log(evt.data);
    audioStream += evt.data;
  }
}

function onClose(evt) {
  console.log("Websocked closed");
}

function onError(evt) {
  console.log("Error on websocket");
}
