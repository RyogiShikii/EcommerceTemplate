import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndUp from './pages/sign-in-and-sign-up/signInAndUp';
import CheckOut from './pages/checkoutpage/checkOutPage';

import { onSnapshot } from 'firebase/firestore';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';

function App() {
  const [user, setUser] = useState(null);

  /*useEffect(() => {
    const subscribe = auth.onAuthStateChanged( async userAuth => {
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
    console.log('The current user is:',user)
    return subscribe;
  },[auth])
  */
  return (
    <div>
      <Header currentUser={user}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndUp} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>
    </div>
  );
}

export default App;
