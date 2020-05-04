import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/HomePage.js';

export const useRoutes = isAuthenticated => {
    if(!isAuthenticated) {
        return(
            <Switch>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
        )
    }
        return(
            <Switch>
                    <Route>
                        <HomePage />
                    </Route>
                    <Redirect to="/" />
            </Switch>
        )
}