'use strict';

const fs = require('fs');
const opn = require('opn');
const glob = require('glob');
const path = require('path');
const express = require('express');
const colors = require('colors');
const webpack = require('webpack');
// load local modules
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

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

//logger
app.use((req, res, next) => {
  console.log(req.method.info, req.originalUrl);
  next();
});


app.get('/', (req, res) => {
  const pages = glob.sync('*/example/index.html', {
    cwd: path.join(__dirname, '../../')
  });
  const names = pages.map((val) => {
    const dir = path.parse(val).dir;
    return path.dirname(dir)
  });

  res.render('index', {
    names: names || [],
    pages: pages || []
  })
});

app.get('/*/example/index.html', (req, res) => {
  const filePath = path.join(__dirname, '../../', req.originalUrl);
  const file = fs.readFileSync(filePath);
  res.set('Content-Type', 'text/html');
  res.send(file);
});


app.use(webpackDevMiddleware(compiler, webpackConf.devServer));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

//error handle
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, host, () => {
  let url = `http://127.0.0.1:${port}`;

  console.log(`Listening at ${url}`);

  opn(url);
});

