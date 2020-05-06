const express = require('express');
const config = require('config');//take the variable from default.js
const mongoose = require('mongoose');

const app = express();

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/task', require('./routes/tasks.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started...${PORT}`));
    } 
    catch(e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();