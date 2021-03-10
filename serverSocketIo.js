var io = require('socket.io')();
io.on('connection', function(socket) {
    //接受消息
    socket.on('message', function (msg) {
        console.log('receive messge : ' + msg );
    });

    //发送消息
    socket.emit('message', 'hello');

    //断开连接回调
    socket.on('disconnect', function () {
        console.log('socket disconnect');
    });
});
io.listen(8000);