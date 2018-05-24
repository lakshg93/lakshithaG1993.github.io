function lamp1Clicked(id) {
    id.innerHTML = '<img class = "lamp1" src="images/candle2.png" alt="">';
    //createMQTTConnection();
    onConnectPublish("5");
}
function lamp2Clicked(id) {
    id.innerHTML = '<img class = "lamp2" src="images/candle2.png" alt="">';
    //createMQTTConnection();
    onConnectPublish("4");
}
function lamp3Clicked(id) {
    id.innerHTML = '<img class = "lamp3" src="images/candle2.png" alt="">';
    //createMQTTConnection();
    onConnectPublish("3");
}

function lamp4Clicked(id) {
    id.innerHTML = '<img class = "lamp4" src="images/candle2.png" alt="">';
    //createMQTTConnection();
    onConnectPublish("2");
    //mqttPublish("4");
}
function lamp5Clicked(id) {
    id.innerHTML = '<img class = "lamp5" src="images/candle2.png" alt="">';
    //createMQTTConnection();
    onConnectPublish("1");

}
function restartButtonClicked(id) {
    onConnectPublish("0");
    document.getElementById("lamp1Place").innerHTML = '<img class = "lamp1a" src="images/candle1.png" alt="">';
    document.getElementById("lamp2Place").innerHTML = '<img class = "lamp2a" src="images/candle1.png" alt="">';
    document.getElementById("lamp3Place").innerHTML = '<img class = "lamp3a" src="images/candle1.png" alt="">';
    document.getElementById("lamp4Place").innerHTML = '<img class = "lamp4a" src="images/candle1.png" alt="">';
    document.getElementById("lamp5Place").innerHTML = '<img class = "lamp5a" src="images/candle1.png" alt="">';

}
function proceedButtonClicked(id) {
    createMQTTConnection();

}
