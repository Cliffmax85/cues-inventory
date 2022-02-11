import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import { logout } from './services/fetch-utils';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout() {
    logout();
    setUser('');
  }


  return (
    <Router>
      <div className="App">
        <header>
          {
            user && 
            <>
              <NavLink to='/cues'>Cues List</NavLink>
              <NavLink to='/create'>Create Cue</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <ListPage />
                  : <AuthPage setUser={setUser} />
              }

            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
