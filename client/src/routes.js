import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { LinksPage } from './pages/LinksPages';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { AuthPage } from './pages/AuthPages';

export const useRoutes = isAuthenticated => {
    if(!isAuthenticated) {
        return(
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
        return(
            <Switch>
                    <Route>
                        <AuthPage />
                    </Route>
                    <Redirect to="/" />
            </Switch>
        )
}