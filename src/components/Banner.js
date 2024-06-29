import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'

const Banner = () => {
    return <section className="h-full max-h-[640px ] mb-8 xl:mb-24">
        <div className="flex flex-col lg:flex-row">
            <div
                className="  mt-24 lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center
                 text-left justify-center flex-1 px-4 lg:px-0">
                <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
                    <span className="text-violet-700"> Арендуйте</span> дом своей мечты у нас!

                </h1>

                <p className=" my-text max-w-[480px] mb-8 text-left  ">
                    Откройте двери к вашему идеальному дому. Мы предлагаем широкий выбор домов и квартир, чтобы помочь
                    вам осуществить вашу мечту о собственном жилье. Наш сайт - ваш надежный партнер в поиске и покупке
                    недвижимости. Доверьтесь нам, чтобы найти идеальное место, где вы сможете создать свои самые яркие и
                    драгоценные моменты жизни.
                </p>
            </div>
            <div className=" hidden flex-1  lg:flex justify-end items-end">
                <img src={Image} alt=""/>
            </div>
        </div>
        <Search/>
    </section>;
};

export default Banner;
