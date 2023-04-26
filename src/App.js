import React,{useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

import Context from './components/utils/Context';

function App() {

  const[active, setActive] = useState("home");
  const[mobileMenu, setMobileMenu] = useState(false);

  return (
    <Context.Provider value={{active, setActive, mobileMenu, setMobileMenu}}>
      <Header/>
      <Body/>
      <Footer/>
      <ScrollUp/>
    </Context.Provider>
  );
}

export default App;
