const Koa = require('koa')

const app = new Koa();
const fs = require('fs');

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./templates/demo.html');
};

app.use(main);
app.listen(3000);