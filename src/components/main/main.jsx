import React from 'react'
import './main.css'
import hero1 from '../hero/images/hero1.svg'
import hero2 from '../hero/images/hero2.svg'
import main1 from '../main/images/main1.svg'
import main2 from '../main/images/main2.svg'
import main3 from '../main/images/main3.svg'
import main4 from '../main/images/main4.svg'
import main5 from '../main/images/main5.svg'


const main = () => {
  return (
    <div className='main'>
        <div className="container main__container">
        <div className="main__box">
          <ul className="main__list">
            <li className="main__item">
              <h1 className="list__title">100%</h1>
              <p className="list__text">Material sifati</p>
            </li>
            <li className="main__item">
              <h2 className="list__subtitle">"Ekologik Toza Uyqu Mahsulotlari"</h2>
              <p className="list__info">ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan</p>
              <button className="main__btn">To'plam</button>
            </li>
          </ul>
          <img className="main__img" src={hero1} alt="Bed" />
        </div>
        <h1 className="main__title">Kuz kolleksiyasi</h1>
        <p className="main__text">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="main__boxs">
            <div className="boxs">
              <img src={main1} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Safari</p>
            </div>
            <div className="boxs">
              <img src={main5} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Malaxit qutisi</p>
            </div>
            <div className="boxs">
              <img src={main4} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Zumrad (AB)</p>
            </div>
            <div className="boxs">
              <img src={main2} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Ko'p rangli ametist</p>
            </div>
            <div className="boxs">
              <img src={main2} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Davralar</p>
            </div>
            <div className="boxs">
              <img src={main1} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Safari</p>
            </div>
            <div className="boxs">
              <img src={main3} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Shivali bezak</p>
            </div>
            <div className="boxs">
              <img src={main4} alt="#" className="main__pic" />
              <img src={hero2} alt="" className="img" />
              <p className="boxs__text">Zumrad (AB)</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default main