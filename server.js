let server = require('express');
let status_codes = require('_http_server').STATUS_CODES;
let app = server();
let fs = require('fs');
const xlsx = require('node-xlsx');

function readXls() {
    let list = xlsx.parse("./edu.xlsx");
    console.log(list);
}
// writeXls();
function writeXls() {
    let data = [];
    for (let i = 1; i < 100; i++) {
        data.push([i, 10 + i, '上海']);
    }
    let xlsxObj = [
        {
            name: 'firstSheet',
            data: data,
        }
    ];
    fs.writeFileSync('./edu0.xlsx', xlsx.build(xlsxObj));
    console.log('success');
}
// mkdir()
function mkdir() {
    let con = { "con": "HelloWorld" };
    fs.writeFile('./6114.json', JSON.stringify(con), { 'flag': 1 }, function (err) {
        if (err) {
            throw err;
        }
        console.log('Hello.');
    });
}

app.use((req, res, next) => {
    res.send = params => {
        let type = typeof params;
        switch (type) {
            case 'object':
                params = JSON.stringify(params);
                break;
            case 'number':
                res.StatusCodes = params;
                params = status_codes[params];
                break;
        }
        res.end(params);
    };
    next();
});

app.post('/sso/oauth', (req, res) => {
    res.send({ flag: 1 });
});
app.get('/test_war/crossDomain', (req, res) => {
    res.send('{flag:1}');
});
app.get('/crossDomain', (req, res) => {
    res.send({ flag: 1 });
});
app.get('/test_war/crossDomain/list', (req, res) => {
    let list = [];
    for (let i = 0; i < 200; i++) {
        list.push({
            "linkName": "测试" + i,
            "link": "kabc123130fs0K13123",
            "scopeOfUse": ["张三", "李四", "张龙", "赵虎", "上官婉儿", "蒙恬", "张三", "李四", "张龙", "赵虎", "上官婉儿", "蒙恬", "张三", "李四", "张龙", "赵虎", "上官婉儿", "蒙恬"],
            "creator": "赵云",
            "creationTime": Date.now(),
            "id": i
        })
    }
    let data = {
        "code": 200,
        data: {
            list
        }
    }
    res.send(data);
});

app.all('*', (req, res) => {
    res.send({ flag: 0 });
});
var server1 = app.listen(668, () => {
    var host = server1.address().address;
    var port = server1.address().port;
    console.log('服务器启动成功host：' + host + '，port： ' + port);
});
