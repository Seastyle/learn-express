const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json());
app.use(cors());

// app.get("/", function(req, res) {
//   res.send("It's working!")
// })

app.get("/", function(req, res) {
  res.json({"name": "跑通了"})
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
