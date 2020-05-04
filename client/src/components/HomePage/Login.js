import React, { useState, useEffect } from 'react';
import { useHttp } from './../../hooks/http.hook.js';
import { useMessage } from './../../hooks/message.hook.js';
import './HomePage.css';
export const Login = () => {

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

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form });
            console.log(data.message);
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
                                Войти
                            </h1>
                        </div>
                        <div className="row auth-item">
                            <div className="input-field col s12">
                                <input id="email" type="email" name="email" className="auth-input validate" onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row auth-item">
                            <div className="input-field col s12">
                                <input id="password" type="password" name="password" className="auth-input validate" onChange={changeHandler} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="auth-footer auth-button">
                            <button className="btn waves-effect waves-teal auth-button__login"
                                onClick={loginHandler}
                                disabled={loading}
                            >
                                Войти
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;