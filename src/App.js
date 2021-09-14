import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndOut from './pages/sign-in-and-sign-out/signInAndOut';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signIn' component={SignInAndOut} />
      </Switch>
    </div>
  );
}

export default App;
