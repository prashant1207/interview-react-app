import React, { useReducer } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Reducer } from '../helper';
import { Chatroom, Home } from '../features';
import './App.css';

const reducer = new Reducer();

function App() {
  const [state, dispatch] = useReducer(reducer.user, {});
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home dispatch={dispatch} />
          </Route>
          <Route path="/chatroom">
            <Chatroom user={state} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
