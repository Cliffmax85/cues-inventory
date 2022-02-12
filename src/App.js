import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import { logout } from './services/fetch-utils';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import DetailPage from './DetailPage';
import { Redirect } from 'react-router-dom';
import CreateCuePage from './CreateCuePage';


export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout() {
    await logout();
    setUser('');
  }


  return (
    <Router>
      <div className="App">
        <header className='header'>
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
            <Route exact path="/cues">
              {
                user 
                  ? <ListPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/cues/:id">
              {
                user 
                  ? <DetailPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {
                user 
                  ? <CreateCuePage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}


