const Project = require("../models/project.model.ts")
const Task = require("../models/task.model.ts")

module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => res.json({ projects: allProjects }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(singleProject => res.json({ project: singleProject }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewProject = (req, res) => {
    Project.create(req.body)
        .then(newProject => res.json({ project: newProject }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateProject = (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProject => res.json({ project: updatedProject }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(deletedProject => res.json({ project: deletedProject }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

// api/projects/:id/tasks
module.exports.findAllTasksOfProject = (req, res) => {
    Task.find({ project_id: req.params.id })
        .then(Tasks => res.json({ tasks: Tasks }))
        .catch(err => res.status(400).json(err))
}