const TaskController = require("../controllers/task.controller.ts")

module.exports = app => {
    app.get("/api/task", TaskController.findAllTasks)
    app.get("/api/task/:id", TaskController.findSingleTask)
    app.post("/api/task/new", TaskController.createNewTask)
    app.put("/api/task/update/:id", TaskController.updateTask)
    app.delete("/api/task/delete/:id", TaskController.deleteTask)
    app.get("/api/task/:id/comments",TaskController.findAllCommentsOfTask)
};