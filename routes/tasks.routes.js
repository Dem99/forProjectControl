const { Router } = require('express');
const Task = require('./../models/Task.js');
const router = Router();
const auth = require('./../middleware/auth.middleware.js');
const config = require('./../config/default.json');

router.get('/', auth,  async (req, res) => {
    try{
        const tasks = await Task.find({ owner: req.user.userId });
        res.json(tasks);
    }
    catch(e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const task = await Task.findById(req.params.id); //??
        res.json(task);
    }
    catch(e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


router.post('maketask', () => {
    try {
        const baseUrl = config.get('baseUrl');
        const { } = req.body;

                

    }
    catch {

    }
})


router.delete('', () => {

})


module.exports = router;
