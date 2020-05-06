import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import TaskPage from './pages/TaskPage.js';
import AccauntPage from './pages/AccauntPage.js';

export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return(
            <Switch>
                    <Route path="/mytaskpage" exact>
                        <TaskPage  />
                    </Route >
                    <Route path="/myaccaunt">
                        <AccauntPage  />
                    </Route>
                    <Redirect to="/mytaskpage" />
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