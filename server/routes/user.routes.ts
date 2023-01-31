const UserController = require("../controllers/user.controller.ts");

module.exports = app => {
  app.post("/api/signup", UserController.signup)
  app.post("/api/login", UserController.login)
  app.get("/api/user", UserController.getAllUsers)
  app.get('/api/user/:id', UserController.findUserById)
  app.delete('/api/user/delete/:id', UserController.deleteUser)
}

