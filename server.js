let server = require('express');
let status_codes = require('_http_server').STATUS_CODES;
let app = server();
let fs = require('fs');
const xlsx = require('node-xlsx');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

function readXls() {
    let list = xlsx.parse("./edu.xlsx");
    console.log(list);
}
// writeXls();
function writeXls() {
    let data = [];
    for (let i = 1; i < 900001; i++) {
        data.push([i, 10 + i, '上海']);
    }
    let xlsxObj = [
        {
            name: 'firstSheet',
            data: data,
        }
    ];
    fs.writeFileSync('./edu0.xlsx',xlsx.build(xlsxObj));
    console.log('success');
}

function mkdir() {
    let con = {"con":"HelloWorld"};
    fs.writeFile('./6114.json',JSON.stringify(con), { 'flag':1 }, function(err) {
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
            case  'object':
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

app.get('/crossDomain', (req, res) => {
    res.send({flag: 1});
});
app.post('/crossDomain/abc', (req, res) => {
    res.send({flag: "abc"});
});

app.all('*', (req, res) => {
    res.send({flag: 0});
});
var server1 = app.listen(668, () => {
    var host = server1.address().address;
    var port = server1.address().port;
    console.log('服务器启动成功host：' + host + '，port： ' + port);
});
