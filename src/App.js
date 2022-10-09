// import {useState} from 'react';
import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Header from '../src/components/ConstComponets/Header'
import Footer from '../src/components/ConstComponets/Footer'
import ScrollButton from './components/ConstComponets/ScrollButton';
import Home from './pages/Home'
import Account from './pages/Account'
import ProductInfo from './pages/ProductInfo'
import Products from './pages/Products'
import Bag from './pages/Bag'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Orders from './pages/Orders'


const configComponent = (component) => {
  return (
    <div style={{ "position": "relative" }}>
      <div>
        <Header />
        <div>
          {component}
        </div>
        <Footer />
      </div>
      <ScrollButton />
    </div>
  )
}
let path = [
  {
    path: '/',
    component: configComponent(<Home />)
  },
  {
    path: '/account',
    component: configComponent(<Account />)
  },
  {
    path: '/productinfo/:slug',
    component: configComponent(<ProductInfo />)
  },
  {
    path: '/product/category/:category',
    component: configComponent(<Products />)
  },
  {
    path: '/bag',
    component: configComponent(<Bag />)
  },
  {
    path: '/favorites',
    component: configComponent(<Favorites />)
  },
  {
    path: '/profile',
    component: configComponent(<Profile />)
  },
  {
    path: '/orders',
    component: configComponent(<Orders />)
  }
]
function App() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <Routes>
      {
        path.map((item, index) => {
          return (
            <Route path={item.path} element={item.component} key={index} />
          )
        })
      }
    </Routes>
  );
}

export default App;
