const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx, next) => {
  ctx.body = 'Hello Koa';
  next();
});

app.use(midd1);
app.use(midd2);
app.use(midd3('hhh'));

async function midd1(ctx, next) {
  await next();
  console.log('midd1');
}

async function midd2(ctx, next) {
  console.log('midd2');
  await next();
}


function midd3(aaa) {
    return async function (ctx) {
      console.log('midd3 ' + aaa);
    }
}

app.listen(3000);
