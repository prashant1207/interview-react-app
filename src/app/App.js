/* eslint-disable import/first */
import React, { useReducer, Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Reducer } from '../helper';

const Home = React.lazy(() => import('../features/home/screens/home.page'));
const Chatroom = React.lazy(() => import('../features/chatroom/screens/chatroom.page'));


import './App.css';

const reducer = new Reducer();

function App() {
  const [state, dispatch] = useReducer(reducer.user, {});
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/" exact>
              <Home dispatch={dispatch} />
            </Route>
            <Route path="/chatroom">
              <Chatroom user={state} />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
