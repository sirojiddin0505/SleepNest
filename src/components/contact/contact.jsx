import React from 'react'
import './contact.css'
import contact1 from '../contact/images/contact1.svg'
import contact2 from '../contact/images/contact2.svg'
import contact3 from '../contact/images/contact3.svg'
import contact4 from '../contact/images/contact4.svg'

const contact = () => {
  return (
    <div className='contact'>
        <div className="container contact__container">
            <div className="contact__box">
                <img src={contact1} alt="" className='contact__img'/>
                <span className='contact__span'>
                    <h3 className="contact__title">Yetkazib berish bupul</h3>
                    <p className="contact__text">Barcha buyurtmalar uchun bepul yetkazib berish</p>
                </span>
            </div>
            <div className="contact__box">
                <img src={contact2} alt=""  className='contact__img'/>
                <span className='contact__span'>
                    <h3 className="contact__title">Qaytish kafolati</h3>
                    <p className="contact__text">30 kunlik pulni qaytarish</p>
                </span>
            </div>
            <div className="contact__box">
                <img src={contact3} alt=""  className='contact__img'/>
                <span className='contact__span'>
                    <h3 className="contact__title">24/7 onlayn qo'llab-quvvatlash</h3>
                    <p className="contact__text">24/7 texnik yordam</p>
                </span>
            </div>
            <div className="contact__box">
                <img src={contact4} alt=""  className='contact__img'/>
                <span className='contact__span'>
                    <h3 className="contact__title">Xavfsiz to'lov</h3>
                    <p className="contact__text">Barcha to'lov usullari qabul qilinadi</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default contact