import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Signup from './pages/Signup';
import Login from './pages/Login';
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/orders' exact component={Orders} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/login' exact component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
