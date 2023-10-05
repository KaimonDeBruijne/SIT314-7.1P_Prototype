const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://broker.hivemq.com:1883")

var roomID = "/kaimon/room2/"

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