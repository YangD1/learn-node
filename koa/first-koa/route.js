const Koa = require('koa')

const app = new Koa();
const fs = require('fs');

const main = ctx => {
  /**
   * 如果访问路由不是根路由，将会显示一个具有链接（链接到根路由）的页面。
   */
  if( ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
}

app.use(main);
app.listen(3000);