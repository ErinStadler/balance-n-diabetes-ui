import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div>
        <Router>
            <div className="container">

                <Switch>

                    <Route path = "/add-user/:id" component = {UserComponent}></Route>

                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;