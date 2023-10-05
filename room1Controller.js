const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://broker.hivemq.com:1883")

var roomID = "/kaimon/room1/"
var roomState = 1
var message = toString(roomState)



client.on('connect', () =>
{
    client.subscribe(roomID);
    console.log('mqtt connected');
}); 

client.on('message', (topic, message) =>
{
    console.log("Topic is: " + topic);
    console.log("Message is: " + message);
    console.log("");
});