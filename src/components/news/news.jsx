import React from 'react'
import './news.css'
import news1 from '../news/images/news1.svg'
import news2 from '../news/images/news2.svg'
import news3 from '../news/images/news3.svg'

const news = () => {
  return (
    <div className='news'>
        <div className="container news__container">
            <h1 className="news__title">Yangiliklar</h1>
            <p className="news__text">Ekologik Toza Uyqu Mahsulotlari</p>
            <ul className="news__list">
                <li className="news__item">
                    <img src={news1} alt="" className="news__img" />
                    <span className="news__span">
                        <p className="news__date">10/05/2024</p>
                        <p className="news__info">admin tomonidan</p>
                    </span>
                    <h3 className="news__subtitle">Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                    <p className="news__subtext">Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
                </li>
                <li className="news__item">
                    <img src={news2} alt="" className="news__img" />
                    <span className="news__span">
                        <p className="news__date">10/05/2024</p>
                        <p className="news__info">admin tomonidan</p>
                    </span>
                    <h3 className="news__subtitle">Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                    <p className="news__subtext">Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
                </li>
                <li className="news__item">
                    <img src={news3} alt="" className="news__img" />
                    <span className="news__span">
                        <p className="news__date">10/05/2024</p>
                        <p className="news__info">admin tomonidan</p>
                    </span>
                    <h3 className="news__subtitle">Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                    <p className="news__subtext">Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default news