const router = require('koa-router')();
const user = require('./user');

router.get('/', user.list)
  .get('/user/', user.list)
  .get('/user/:id', user.show)
  .post('/user/add', user.add)
  .post('/user/del/:id', user.del);

module.exports = router
