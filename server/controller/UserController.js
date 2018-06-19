const userModel = require('./../model/UserModel');

let user = {
    list,
    add,
    show,
    del
}
async function list(ctx) {
    let data = await userModel.find();
    ctx.response.body = data;
}

/**
 * Show creation form.
 */

async function add(ctx) {
  ctx.response.body = 'add';
}

/**
 * Show post :id.
 */

async function show(ctx) {
    const id = ctx.params.id;
    let data = await userModel.findOne();
    ctx.response.body = data;
}

/**
 * Show post :id.
 */

async function del(ctx) {
  const id = ctx.params.id;
  ctx.response.body = 'del/' + id;
}

module.exports = user

