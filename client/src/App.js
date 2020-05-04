import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'materialize-css';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(true)
  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
