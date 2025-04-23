import React from 'react'
import './nav.css'
import logo from '../nav/images/logo.svg'

const nav = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__left">
          <img src={logo} alt="logo bor edi" className='nav__logo'/>
        </div>
        <div className="nav__right">
          <a href="" className="nav__link">Bosh sahifa</a>
          <a href="" className="nav__link">To'plam</a>
          <a href="" className="nav__link">Biz haqimizda</a>
          <a href="" className="nav__link">Kontaktlar</a>
          <select name="change">
            <option value="" disabled>👇</option>
            <option value="">UZ</option>
            <option value="">RU</option>
            <option value="">EN</option>
          </select>
          <div className="hum__menu" id="hum__menu">☰</div>
        </div>
      </div>
    </nav>
  )
}

export default nav