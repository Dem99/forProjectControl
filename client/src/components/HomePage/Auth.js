import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from './../../hooks/http.hook.js';
import { useMessage } from './../../hooks/message.hook.js';
import './HomePage.css';
import { useAuth } from '../../hooks/auth.hook.js';
import { AuthContext } from '../../context/AuthContext.js';
import {Loading} from './../../assets/utils/loading.js';

export const Auth = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError,])

    useEffect(()=>{
        window.M.updateTextFields();
    }, [])

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
            auth.login(data.token, data.userId);
        }
        catch (e) {
        }
    }

    return (
        <div className="row auth">
            <div className="col s6 offset-s3 auth-wrapper">
                <div className="row auth-box">
                    <Loading className="loading-box" isLoading={loading} />
                    <form className="col s12 auth-form">
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
                            <button className="btn auth-button__login"
                                onClick={loginHandler}
                                disabled={loading}
                            ><i className="material-icons">done</i>
                               Войти 
                        </button>
                            <button className="btn auth-button__register"
                                onClick={registerHandler}
                                disabled={loading}
                            > <i className="material-icons">account_circle</i> Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}