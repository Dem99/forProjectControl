const { Schema, model, Types } = require('mongoose');

const schema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    picture: {
        type: String
    },

    comments: [{
        type: Types.ObjectId
    }
    ],

    role: {
        type: String
    },

    tasks: [
        {
            type: Types.ObjectId,
            ref: 'Task'
        }
    ]

})

module.exports = model('User', schema);