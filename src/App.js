import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndOut from './pages/sign-in-and-sign-out/signInAndOut';

import { getAuth } from '@firebase/auth';
import { createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      createUserProfileDocument(user);
    });
    return subscribe;
  },[auth,user])

  return (
    <div>
      <Header currentUser={user}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndOut} />
      </Switch>
    </div>
  );
}

export default App;
