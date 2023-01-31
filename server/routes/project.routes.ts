const ProjectController = require("../controllers/project.controller.ts")

module.exports = app => {
    app.get("/api/project", ProjectController.findAllProjects)
    app.get("/api/project/:id", ProjectController.findSingleProject)
    app.post("/api/project/new", ProjectController.createNewProject)
    app.put("/api/project/update/:id", ProjectController.updateProject)
    app.delete("/api/project/delete/:id", ProjectController.deleteProject)
    app.get("/api/project/:id/tasks", ProjectController.findAllTasksOfProject)
};