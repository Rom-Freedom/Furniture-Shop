import React from 'react'

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
        </div>
        <div className="presentation"></div>
    </header>
  )
}
