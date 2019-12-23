const Koa = require('koa')
const route = require('koa-route')

const app = new Koa();

const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/">Index Page</a>';
};

app.use(route.get('/redirect', redirect));
app.listen(3000);