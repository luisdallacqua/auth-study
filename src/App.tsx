import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ProtectedLayout } from './compontes/ProtectedLayout';
import { Login } from './compontes/Login/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
            <Route path='/profile'>
              <ProtectedLayout>
                  <h2>Esse é o componente profile</h2>
              </ProtectedLayout>
            </Route>
            
            <Route path='/login'>
              <Login />
            </Route>
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
