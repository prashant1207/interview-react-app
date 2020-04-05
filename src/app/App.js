import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Chatroom from '../features/chatroom/screens/chatroom.page';
import HomePage from '../features/home/screens/home.page';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/chatroom">
            <Chatroom />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
