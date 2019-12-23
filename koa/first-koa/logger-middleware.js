const Koa = require('koa')

const app = new Koa();


const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}
app.use(logger);

app.listen(3000);