import React from 'react'
import './hero.css'
import hero1 from '../hero/images/hero1.svg'
import hero2 from '../hero/images/hero2.svg'
import boxs1 from '../hero/images/boxs1.svg'
import boxs2 from '../hero/images/boxs2.svg'
import boxs3 from '../hero/images/boxs3.svg'
import boxs5 from '../hero/images/boxs5.svg'
import boxs8 from '../hero/images/boxs8.svg'

const hero = () => {
  return (
    <div className='hero'>
      <div className="container hero__container">
        <div className="hero__box">
          <ul className="hero__list">
            <li className="hero__item">
              <h1 className="list__title">100%</h1>
              <p className="list__text">Material sifati</p>
            </li>
            <li className="hero__item">
              <h2 className="list__subtitle">"Ekologik Toza Uyqu Mahsulotlari"</h2>
              <p className="list__info">ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan</p>
              <button className="hero__btn">To'plam</button>
            </li>
          </ul>
          <img className="hero__img" src={hero1} alt="Bed" />
        </div>
        <h1 className="hero__title">Qish kolleksiyasi</h1>
        <p className="hero__text">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="hero__boxs">
            <div className="boxs">
              <img src={boxs1} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Kvadratchalar</p>
            </div>
            <div className="boxs">
              <img src={boxs2} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Ikat</p>
            </div>
            <div className="boxs">
              <img src={boxs3} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Geometriya Ko'k</p>
            </div>
            <div className="boxs">
              <img src={boxs5} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Bambi</p>
            </div>
            <div className="boxs">
              <img src={boxs8} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Davralar</p>
            </div>
            <div className="boxs">
              <img src={boxs2} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Lavanta Atirgullari</p>
            </div>
            <div className="boxs">
              <img src={boxs1} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Kvadratchalar</p>
            </div>
            <div className="boxs">
              <img src={boxs8} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Ikat</p>
            </div>
            <div className="boxs">
              <img src={boxs3} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Bambi</p>
            </div>
            <div className="boxs">
              <img src={boxs2} alt="#" className="hero__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Kvadratchalar</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default hero