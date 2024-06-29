import React, { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';
import { Transition } from '@headlessui/react';


const TypingEffect = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, []);
    return (
        <Transition
            show={showText}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-1000"
        >
            <p className="max-w-[480px] mb-8 text-left ">
                Откройте двери к вашему идеальному дому. Мы предлагаем широкий выбор домов и квартир, чтобы помочь
                вам осуществить вашу мечту о собственном жилье. Наш сайт - ваш надежный партнер в поиске и покупке
                недвижимости. Доверьтесь нам, чтобы найти идеальное место, где вы сможете создать свои самые яркие и
                драгоценные моменты жизни.
            </p>
        </Transition>
    );
};

export default TypingEffect;
