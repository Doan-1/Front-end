// import {useState} from 'react';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Header from '../src/components/ConstComponets/Header'
import Footer from '../src/components/ConstComponets/Footer'
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
    <div>
      <Header />
      <div>
        {component}
      </div>
      <Footer />
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
    path: '/productinfo',
    component: configComponent(<ProductInfo />)
  },
  {
    path: '/products',
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
