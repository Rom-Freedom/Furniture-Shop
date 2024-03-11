import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <header>
        <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
                <li>About</li>
                <li>Contacts</li>
                <li>Room</li>
            </ul>
            <FaCartShopping className='shop-cart-button' />
        </div>
        <div className="presentation"></div>
    </header>
  )
}
