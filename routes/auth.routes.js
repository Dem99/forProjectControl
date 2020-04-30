const {Router} = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
    '/register',  
    [
        check('email','Неккоректный email').isEmail(),
        check('password','Минимальная длина пароля 6 символов').isLength({min: 6})
    ],  
    async (req, res) => {

        try{
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Неккоректные данные при регистрации'
                })
            }

            const {email, password} = req.body;

            const candidate = await User.findOne({email});

            if(candidate){
                return res.status(400).json({message: 'Такой пользователь уже существует'})
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'Пользователь создан'});

        }
        catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
})

router.post(
    '/login',
    [
        check('email', 'Введиет корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {

        try{

            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Неккоректные данные при входе в систему'
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});

            if(!user) {
                return  res.status(400).json({ message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return res.status(400).json({message: 'Неверный пароль, попробуйте снвоа'})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({token, userId: user.id})

        }
        catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }


})

module.exports = router;