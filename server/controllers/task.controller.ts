const Task = require("../models/task.model.ts")
const Comments = require("../models/comment.model.ts")


module.exports.findAllTasks = (req, res) => {
    Task.find()
        .then(allTasks => res.json({ tasks: allTasks }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleTask = (req, res) => {
    Task.findOne({ _id: req.params.id })
        .then(singleTask => res.json({ task: singleTask }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewTask = (req, res) => {
    Task.create(req.body)
        .then(newTask => res.json({ task: newTask }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedTask => res.json({ task: updatedTask }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then(deletedTask => res.json({ task: deletedTask }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

// api/tasks/:id/comments
module.exports.findAllCommentsOfTask = (req, res) => {
    Comments.find({ task_id: req.params.id })
        .then(Comments => res.json({ comments: Comments }))
        .catch(err => res.status(400).json(err))
}