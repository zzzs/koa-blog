const userController = require('./../controller/UserController');

let user = {
    list: userController.list,
    add: userController.add,
    show: userController.show,
    del: userController.del
}

module.exports = user
