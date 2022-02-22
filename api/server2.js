const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

app.listen(3333, () => {
  console.log("app listening on port 3333")
})


