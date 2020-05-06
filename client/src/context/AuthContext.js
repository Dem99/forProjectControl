import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
    token: null,
    useId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})