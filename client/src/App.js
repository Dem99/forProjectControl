import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { useRoutes } from './routes.js';
import { AuthContext } from './context/AuthContext.js';
import { useAuth } from './hooks/auth.hook.js';
import 'materialize-css';
import Navbar from './components/TaskPage/Navbar.js';


function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
      {isAuthenticated && <Navbar />}
        <div>
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
