import React, { useState, useEffect } from 'react';
import { useHttp } from './../../hooks/http.hook.js';
import { useMessage } from './../../hooks/message.hook.js';
import './HomePage.css';
export const Auth = () => {

    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError,])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            message(data.message);
        }
        catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form });
            message(data.message);
        }
        catch (e) {
        }
    }

    return (
        <div className="row auth">
            <div className="col s6 offset-s3 auth-wrapper">
                <div className="row auth-box">
                    <form className="col s12 auth-form">
                        <div className="auth-title">
                            <h1 >
                            Зарегестрировать Аккаунт
                            </h1>
                        </div>
                        <div className="row auth-item">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="auth-input validate" onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row auth-item">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="auth-input validate" onChange={changeHandler} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="auth-footer auth-button">
                            <button className="btn waves-effect waves-teal auth-button__login" style={{ marginRight: 10 }}
                                onClick={loginHandler}
                                disabled={loading}
                            >
                                Войти
                        </button>
                            <button className="btn   auth-button__register"
                                onClick={registerHandler}
                                disabled={loading}
                            >Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}