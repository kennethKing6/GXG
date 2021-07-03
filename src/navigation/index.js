import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom"
  import About from '../pages/about'
  import index from '../pages/landing'
  import Contact from '../pages/contact'
  import Shop from '../pages/shop'
  import Cart from '../pages/cart'

export default function Index() {
    return (
        <Switch>
            <Route exact path="/" component={index}/>

          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>   
          <Route exact path="/shop" component={Shop}/> 
          <Route exact path="/cart" component={Cart}/>      
        </Switch>
    )
}
