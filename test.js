var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mingming";	// 连接的url

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {	// 调用封装好的connect按照url建立和MongoDB之间的连接
    if (err) {
        throw err;
    }
    console.log("数据库连接建立");
    db.close();
})
