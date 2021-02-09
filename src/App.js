import React from 'react';
import './assets/styles/global.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import CartContextProvider from './Context';
import Intro from './Layer/IntroLayout';
import Layout from './Layer/Layout';

function App (props) {
  return (
    <div className="inside">
      <CartContextProvider>
        <Header />
        <Intro />
        <Layout />
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
