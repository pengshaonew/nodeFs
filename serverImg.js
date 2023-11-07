let server = require('express');
const bodyParser = require('body-parser');
const { userRouter, blogRouter } = require('./routers');
let app = server();
const axios = require('axios');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

const { queryParser } = require('express-query-parser')
app.use(
    queryParser({
        parseNull: true,
        parseUndefined: true,
        parseBoolean: true,
        parseNumber: true
    })
)

// 添加用户路由到应用
app.use('/user', userRouter);

// 添加博客路由到应用
app.use('/blog', blogRouter);

// 举牌小人图片接口
app.post('/api/getImg', (req, res) => {
    let data = req.body;
    // res.send({flag: "abc"});
    if (!data) {
        res.send({code: 0});
    }
    getImg(data.data, res)
});

app.get('/api/getImg', (req, res) => {
    let data = req.query;
    if (!data) {
        res.send({code: 0});
    }
    getImg(data.data, res)
});

// 获取举牌小人图片
const getImg = (val, resSend) => {
    const formData = new URLSearchParams();
    formData.append('t', val);
    axios.post('https://www.jiuwa.net/tools/jupai/index.php', formData)
        .then(response => {
            // 处理响应数据   https://www.jiuwa.net
            console.log(response.data);
            resSend.send({
                code: 200,
                data: 'https://www.jiuwa.net' + response.data
            })
        })
        .catch(error => {
            // 处理错误
        });
}

app.all('*', (req, res) => {
    res.send({flag: 0});
});

var server1 = app.listen(6688, () => {
    var host = server1.address().address;
    var port = server1.address().port;
    console.log('服务器启动成功host：' + host + '，port： ' + port);
});

