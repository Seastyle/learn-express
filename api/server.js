const express = require("express");
const cors = require("cors"); // 处理跨域请求
const bodyParser = require('body-parser');

// 创建服务器 相当于 http.createServer
const app = express()

app.use(express.json());
app.use(cors());

//使用参数解析中间件
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//解析 application/json
app.use(bodyParser.json());

let getDatas = [
  {
      "name":"我是get",
      "content":"铁汁666啊"
  },
];

let postDatas = [
  {
      "name":"我是post",
      "content":"还行还行，你也挺6"
  }
];

app.get("/", function(req, res) {
  // req.query能得到get请求发送的数据  
  // res.send()  send的好处是 能够自动设置mime类型
  res.send("It's ok!")
})

app.get("/test", function(req, res) {
  let rest = req.query;
  res.send(getDatas)
})

app.post("/test", function(req, res) {
  let rest = req.body;
  res.send(postDatas)
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
