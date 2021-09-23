import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndOut from './pages/sign-in-and-sign-out/signInAndOut';

import { onSnapshot } from 'firebase/firestore';
import { createUserProfileDocument, Auth } from './firebase/firebase.utils';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = Auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        const userSnap = onSnapshot(userRef, user => {
          setUser({
            id:user.id,
            ...user.data()
          })
        })
      }else{
        setUser(null);
      }
    });
    //console.log(user)
    return subscribe;
  },[Auth])

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
