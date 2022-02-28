var username= null;
var ws = null;
var url = "ws://localhost:8080/websocket"

function setConnected(connected) {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
    document.getElementById('echo').disabled = !connected;
}

function connect() {
    username = document.getElementById('username').value;
    ws = new WebSocket(url);

    ws.onopen = function () {
        ws.send(username+" entered");
        setConnected(true);
        log("welcome!!");
    };

    ws.onmessage = function (event) {
        log(event.data);
    };

    ws.onclose = function () {
        log("bye!!");
        setConnected(false);
    };
}

function disconnect() {
    if (ws != null) {
        ws.send(username+ " has left");
        ws.close();
        ws = null;
    }
    setConnected(false);
}

function echo() {
    if (ws != null) {
        var message = document.getElementById('message').value;
        //log('Sent: ' + message);
        ws.send(username + " : " + message);
    } else {
        alert('connection not established, please connect.');
    }
}

function log(message) {
    var console = document.getElementById('logging');
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(message));
    console.appendChild(p);
    while (console.childNodes.length > 12) {
        console.removeChild(console.firstChild);
    }
    console.scrollTop = console.scrollHeight;
}