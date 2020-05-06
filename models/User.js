const {Schema, model, Types} = require('mongoose');

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
        
        tasks: [
            {
                type: Types.ObjectId,
                ref: 'Task'
            }
        ]

})

module.exports = model('User', schema);