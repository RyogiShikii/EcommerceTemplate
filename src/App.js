import './App.css';
import { useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndUp from './pages/sign-in-and-sign-up/signInAndUp';
import CheckOut from './pages/checkoutpage/checkOutPage';

import { onAuthStateChangedListener} from './firebase/firebase.utils';
import { setCurrentUser } from './store/userSlice';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.user)

  useEffect(() => {
    const subscribe = onAuthStateChangedListener((user) => {
      if(user){
        dispatch(setCurrentUser(user.accessToken));
      }else{
        dispatch(setCurrentUser(null))
      }
    })
    console.log('The current user is:',currentUser)
    return subscribe;
  },[])
  
  return (
    <div>
      <Header currentUser={currentUser}/>
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
