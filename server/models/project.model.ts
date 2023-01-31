const mongoose = require("mongoose");

const projectScheme = mongoose.Schema(
    {
        name: String,

        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],

        // admin: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'user'
        // },

    },

    {
        timestamps: true
    })

const Project = mongoose.model('Project', projectScheme)

module.exports = Project