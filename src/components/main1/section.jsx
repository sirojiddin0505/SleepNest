import React from 'react'
import './section.css'
import hero1 from '../hero/images/hero1.svg'
import hero2 from '../hero/images/hero2.svg'
import section1 from '../main1/images/section1.svg'
import section2 from '../main1/images/section2.svg'
import section3 from '../main1/images/section3.svg'
import section4 from '../main1/images/section4.svg'
import section5 from '../main1/images/section5.svg'
import section6 from '../main1/images/section6.svg'


const mains = () => {
  return (
    <div className='main1'>
        <div className="container main1__container">
        <div className="main1__box">
          <ul className="main1__list">
            <li className="main1__item">
              <h1 className="list__title">100%</h1>
              <p className="list__text">Material sifati</p>
            </li>
            <li className="main1__item">
              <h2 className="list__subtitle">"Ekologik Toza Uyqu Mahsulotlari"</h2>
              <p className="list__info">ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan</p>
              <button className="main1__btn">To'plam</button>
            </li>
          </ul>
          <img className="main1__img" src={hero1} alt="Bed" />
        </div>
        <h1 className="main1__title">Yozgi kolleksiya</h1>
        <p className="main1__text">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="main1__boxs">
            <div className="boxs">
              <img src={section1} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Vintage uslubi</p>
            </div>
            <div className="boxs">
              <img src={section2} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">tebranayotgan karahindiba</p>
            </div>
            <div className="boxs">
              <img src={section3} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Fransuz Riviera</p>
            </div>
            <div className="boxs">
              <img src={section6} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Alp tog'lari o'simliklarit</p>
            </div>
            <div className="boxs">
              <img src={section5} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Yashil lotus</p>
            </div>
            <div className="boxs">
              <img src={section3} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">tebranayotgan karahindiba</p>
            </div>
            <div className="boxs">
              <img src={section4} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Qo'y Dolli</p>
            </div>
            <div className="boxs">
              <img src={section5} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Yashil lotus</p>
            </div>
            <div className="boxs">
              <img src={section3} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Fransuz Riviera</p>
            </div>
            <div className="boxs">
              <img src={section1} alt="#" className="main1__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Yashil lotus</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default mains