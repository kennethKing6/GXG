import React from 'react';
import {Layout,Image } from 'antd';
import './header.css';
import logo from '../../assets/logo/logo2.jpg';
import {
  Link
} from "react-router-dom"
const { Header } = Layout;

export default function HeaderComponent() {
    return (
        <Header className="header-1" >
        <div  className="gxg_logo_div" >
        <Image
          width={150}
          height={150}
          src={logo}
          loading="lazy"
          preview={false}
          alt="GXG Logo"
          className="logo_img"
        />
        </div>
        <nav className="page_navigation">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Header>
    )
}
