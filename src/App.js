import React, {Component} from 'react';

import Title from './components/Title'; 
import Product from './components/Product'; 
import Cart from './components/Cart';
import Footer from './components/Footer';
class App extends Component {
  render(){
    return (
      <div>
      <Title />
      <Product />  
      <Cart />
      <Footer />
    </div>
  );
}}

export default App;
