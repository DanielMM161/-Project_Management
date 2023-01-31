const mongoose = require("mongoose")

const taskScheme = mongoose.Schema(
    {
        name: String,
        description: String,

        is_complete: {
            type: Boolean,
            default: false,
        },

        due_date: Date,

        project_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
        },

        assigned_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
    },
    {
        timestamps: true
    })


const Task = mongoose.model('Task', taskScheme)

module.exports = Task