const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/' , (req, res)=>{
    const whichRoom = req.body.passedRoom
    const state = req.body.passedState

    const lightMessage = "Light is " + state
    var room = "/kaimon/" + whichRoom + "/"
    console.log("published to " + room)
    client.publish(room, lightMessage)

})

app.listen(8080, function(){
    console.log("Server is running on port 8080")
})