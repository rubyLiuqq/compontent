/**
 * Created by zhuqiacheng on 2016/10/8.
 */
'use strict';

const fs = require('fs');
const opn = require('opn');
const glob = require('glob');
const path = require('path');
const express = require('express');
const webpack = require('webpack');

const pkg = require('../../package.json');
const webpackConf = require('./webpack.config');
const port = pkg.config.port || 8000;
const host = pkg.config.host || '0.0.0.0';
const compiler = webpack(webpackConf);

const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

// init framework
let app = express();

app.set('view engine', 'ejs');
app.set("view options", {
  root: __dirname,
  layout: false,
  cache: false,
  debug: false
});

app.set('views', __dirname + '/');

app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  const pages = glob.sync('*/JsAPI/example/index.html', {
    cwd: path.join(__dirname, '../../')
  });
  const names = pages.map((val) => {
    const dir = path.parse(val).dir;
    return path.dirname(dir)
  });

  res.render('home', {
    names: names || [],
    pages: pages || []
  })
});

app.get('/*/JsAPI/example/index.html', (req, res) => {
  const filePath = path.join(__dirname, '../../', req.originalUrl);
  const file = fs.readFileSync(filePath);
  res.set('Content-Type', 'text/html');
  res.send(file);
});


app.use(webpackDevMiddleware(compiler, webpackConf.devServer));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.listen(port, host, () => {
  let url = `http://127.0.0.1:${port}`;
  console.log(`Listening at ${url}`);
  opn(url);
});
