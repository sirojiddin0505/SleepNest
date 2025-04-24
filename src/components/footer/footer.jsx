import React from 'react'
import './footer.css'
import logo from '../nav/images/logo.svg'


const footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="footer__logo">
                <img src={logo} alt="" className="footer__img" />
                <p className="footer__info">“Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.</p>
            </div>
            <div className="footer__left">
                <h2 className="footer__title">Menyu</h2>
                <a href="" className="footer__link"><p className="footer__text">Bosh sahifa</p></a>
                <a href="" className="footer__link"><p className="footer__text">To'plam</p></a>
                <a href="" className="footer__link"><p className="footer__text">Biz haqimizda</p></a>
                <a href="" className="footer__link"><p className="footer__text">Kontaktlar</p></a>
            </div>
            <div className="footer__center">
                <h2 className="footer__title">Kontaktlar</h2>
                <a href="" className="footer__link"><p className="footer__text">Buxoro, st. Alpomish 80.</p></a>
                <a href="" className="footer__link"><p className="footer__text">Email: sleepnest@gamil.com</p></a>
                <a href="https://t.me/sleepnest" className="footer__link"><p className="footer__text">Telegram: sleepnest</p></a>
                <a href="https://+998 94 033 72 12" className="footer__link">+998 94 033 72 12</a>
            </div>
            <div className="footer__right">
                <h2 className="footer__title">Elektron pochtamizga obuna bo'ling</h2>
                <div className="input__wrapper">
                <form action="#">
                    <input type="email" placeholder="Elektron pochtangizni kiriting"/>
                    <button className='footer__btn'>Obuna Bo'ling</button>
                </form>
                </div>
            </div>
        </div>
    </footer>
)
}

export default footer