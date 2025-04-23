import React from 'react'
import './header.css'
import header1 from './images/header.svg'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className="header__left">
          {/* <img src={header1} alt="" className='header__img'/> */}
        </div>
        <div className="header__right">
          <p className="header__info">Ekologik</p>
          <h2 className="header__title">Toza Uyqu</h2>
          <h1 className="header__subtitle">Mahsulotlari</h1>
        </div>
      </div>
    </header>
  )
}

export default header