const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

// "database"

const posts = [];

// middleware

app.use(logger());

app.use(koaBody());

// route definitions

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show);

app.use(router.routes());

/**
 * Post listing.
 */

async function list(ctx) {
  ctx.response.body = 'list';
  // await ctx.render('list', { posts: posts });
}

/**
 * Show creation form.
 */

async function add(ctx) {
  ctx.response.body = 'add';
  // await ctx.render('new');
}

/**
 * Show post :id.
 */

async function show(ctx) {
  const id = ctx.params.id;
  ctx.response.body = 'show/' + id;
}

// listen

if (!module.parent) app.listen(3000);
