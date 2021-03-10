let ws = require('nodejs-websocket');
var server = ws.createServer(function (connection) {
    //接收到字符串str
    connection.on("text", function (str) {
        console.log(JSON.parse(str));
        let msg = JSON.parse(str);
        broadcast(msg);
    });


    connection.on("close", function () {
        //客户端关闭
    });

    connection.on("error", function () {
        //error
    });
});

//广播消息
function broadcast( msg) {
    server.connections.forEach(function(conn) {
        conn.sendText(msg)
    })
}
server.listen(8000, "127.0.0.1", () => {
    console.log("server running at 127.0.0.1:8000");
});
