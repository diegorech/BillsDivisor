const { Schema, model } = require('mongoose')

const GroupSchema = new Schema({
    groupname: {
        type: String,
        required: true,
    },

    users: {
        type: String,
        required: true,
    },

    bills: {
        type: Object
    },
    timestamps: true,
})

module.exports = model('Groups', GroupSchema)