import React from 'react'
import "../styles/PreNavbar.css"

const PreNavbar = () => {
  return (
    <div className='preNav'>
      <div>
        <a href="www.google.com" target="_blank">MI PAKISTAN</a><span></span>
        <a href="www.facebook.com" target="_blank">GET MI STORE APP</a><span></span>
        <a href="www.google.com" target="_blank">ONLINE HELP</a><span></span>
        <a href="www.google.com" target="_blank">REATAIL STORE</a>
      </div>
      <div>
        <a href="#">SIGN IN</a><span></span>
        <a href="#">SIGN UP</a><span></span>
        <a href="#">CART (0)</a><span></span>
      </div>
    </div>
  )
}

export default PreNavbar
