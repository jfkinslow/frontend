import React from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Route, Navlinks } from 'react-router-dom';

// import components
// import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginForm';
import UserLanding from './components/UserLanding';
import NewUserForm from './components/NewUserForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>

        {/* Routes */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={NewUserForm} />
        <Route path='/landing' component={UserLanding} /> {/* Maybe change the url to user's username later */}
        {/* <PrivateRoute exact path='' component={} /> */}

      </div>
    </Router>
  );
}

export default App;
