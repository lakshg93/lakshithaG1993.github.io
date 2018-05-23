//client = new Paho.MQTT.Client("broker.hivemq.com", 8000, "clientId");

createMQTTConnection();

function createMQTTConnection(){

    var date = new Date();
    var components = [
        date.getYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];

    var id = components.join("");
    var idString = id.toString();
    console.log(idString);

    //client = new Paho.MQTT.Client("iot.eclipse.org",80,"/ws","clientId");
    client = new Paho.MQTT.Client("wss://iot.eclipse.org:443/ws", idString);
// set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

// connect the client

    client.connect({onSuccess:onConnect});

// called when the client connects

}


function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    onConnectSubscribe();
}

function onConnectSubscribe() {
    // Once a connection has been made, make a subscription and send a message.
    client.subscribe("lampIIHL-receive");
}

function onConnectPublish(messageString) {
    debugger;
    // Once a connection has been made, make a subscription and send a message.
    message1 = new Paho.MQTT.Message(messageString);
    message1.destinationName = "lampIIHL";
    client.send(message1);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives

function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    var lampStatus = message.payloadString.split("");
    console.log("split:" + lampStatus[0]+"-"+lampStatus[1]+"-"+lampStatus[2]+"-"+lampStatus[3]+"-"+lampStatus[4]);
    if (lampStatus[0] == "1") {
        document.getElementById("lamp1Place").innerHTML = '<img class = "lamp1" src="images/candle2.png" alt="">';
    }else {
        document.getElementById("lamp1Place").innerHTML = '<img class = "lamp1a" src="images/candle1.png" alt="">';
    }
    if (lampStatus[1] == "1") {
        document.getElementById("lamp2Place").innerHTML = '<img class = "lamp2" src="images/candle2.png" alt="">';
    }else {
        document.getElementById("lamp2Place").innerHTML = '<img class = "lamp2a" src="images/candle1.png" alt="">';
    }
    if (lampStatus[2] == "1") {
        document.getElementById("lamp3Place").innerHTML = '<img class = "lamp3" src="images/candle2.png" alt="">';
    }else {
        document.getElementById("lamp3Place").innerHTML = '<img class = "lamp3a" src="images/candle1.png" alt="">';
    }
    if (lampStatus[3] == "1") {
        document.getElementById("lamp4Place").innerHTML = '<img class = "lamp4" src="images/candle2.png" alt="">';
    }else {
        document.getElementById("lamp4Place").innerHTML = '<img class = "lamp4a" src="images/candle1.png" alt="">';
    }
    if (lampStatus[4] == "1") {
        document.getElementById("lamp5Place").innerHTML = '<img class = "lamp5" src="images/candle2.png" alt="">';
    }else {
        document.getElementById("lamp5Place").innerHTML = '<img class = "lamp5a" src="images/candle1.png" alt="">';
    }
}


