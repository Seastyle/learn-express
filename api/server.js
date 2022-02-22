const express = require("express");
const cors = require("cors"); // 处理跨域请求
const bodyParser = require('body-parser');
const path = require('path');

// 创建服务器 相当于 http.createServer
const app = express()

app.use(express.json());
app.use(cors());

// 指定模板存放目录  第一个参数是固定的写法 'views',第二个参数是模板文件所在的根路径
// app.set('views', 'views');
app.set('views',path.join(__dirname,'views'));

// view engine: 要使用的模板引擎。例如：app.set('view engine','pug')。 第一个参数是固定的写法，第二个参数是模板文件的后缀名
// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');

//使用参数解析中间件
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//解析 application/json
app.use(bodyParser.json());


/*
  在中间件中写 console.log 语句是比较糟糕的做法，因为 console.log（包括其他同步的代码）都会阻塞 Node.js 的异步事件循环，
  降低服务器的吞吐率。在实际生产中，推荐使用第三方优秀的日志中间件，例如 morgan、winston 等等。
*/ 
function loggingMiddleware(req,res,next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next()
}
app.use(loggingMiddleware);

// 添加静态文件中间件如下，并指定静态资源根目录为 public
app.use(express.static('public'));


// ---------- 接口 ----------

// 假数据
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

app.get("/test", function(req, res) {
  let rest = req.query;
  res.send(getDatas)
})

app.post("/test", function(req, res) {
  let rest = req.body;
  res.send(postDatas)
})

// ---------- 渲染模板 ----------

app.get("/", function(req, res) {
  // req.query能得到get请求发送的数据  
  // res.send()  send的好处是 能够自动设置mime类型
  
  // res.send("It's ok!")

  res.render('index');
})

app.get("/surprise", function(req, res) {
  res.render('surprise');
})

// ----------  错误处理 ---------

app.get('/500', (req, res) => {
  res.status(500).render('500', { val: req.originalUrl });

  // throw new Error('有点炸!');
});

// 处理访问不存在的路径
app.use('*', (req, res) => {
  
  res.status(404).render('404', { url: req.originalUrl });
  // res.send('这个页面不存在')
});



app.listen(1000, () => {
  console.log("app listening on port 1000")
})

