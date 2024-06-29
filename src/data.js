// import house images
import House1 from './assets/img/houses1/house_f1.png';
import House2 from './assets/img/houses1/house_f2.png';
import House3 from './assets/img/houses1/house_f3.png';
import House4 from './assets/img/houses1/house_f4.png';
import House5 from './assets/img/houses1/house_f5.png';
import House6 from './assets/img/houses1/house_f6.png';
import House7 from './assets/img/houses1/house_f7.png';
import House8 from './assets/img/houses1/house_f8.png';
import House9 from './assets/img/houses1/house_f9.png';
import House10 from './assets/img/houses1/house_f10.png';
import House11 from './assets/img/houses1/house_f11.png';
import House12 from './assets/img/houses1/house_f12.png';
// import house large images
import House1Lg from './assets/img/houses1/house1.jpeg';
import House2Lg from './assets/img/houses1/house2.jpeg';
import House3Lg from './assets/img/houses1/house3.jpeg';
import House4Lg from './assets/img/houses1/house4.jpeg';
import House5Lg from './assets/img/houses1/house5.jpeg';
import House6Lg from './assets/img/houses1/house6.jpeg';
import House7Lg from './assets/img/houses1/house7.jpeg';
import House8Lg from './assets/img/houses1/house8.jpeg';
import House9Lg from './assets/img/houses1/house9.jpg';
import House10Lg from './assets/img/houses1/house10.jpeg';
import House11Lg from './assets/img/houses1/house11.jpeg';
import House12Lg from './assets/img/houses1/house12.jpeg';

// import apartments images
import Apartment1 from './assets/img/apartments/apartment_f1.png';
import Apartment2 from './assets/img/apartments/apartment_f2.png';
import Apartment3 from './assets/img/apartments/appartment_f3.png';
import Apartment4 from './assets/img/apartments/apartment_f4.png';
import Apartment5 from './assets/img/apartments/apartment_f5.png';
import Apartment6 from './assets/img/apartments/apartment_f6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/apartment1.jpeg';
import Apartment2Lg from './assets/img/apartments/apartment2.jpeg';
import Apartment3Lg from './assets/img/apartments/apartment3.jpeg';
import Apartment4Lg from './assets/img/apartments/apartment4.jpeg';
import Apartment5Lg from './assets/img/apartments/apartment5.jpeg';
import Apartment6Lg from './assets/img/apartments/apartment6.jpeg';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export function getUserData(userId) {
    // Ваша логика получения данных пользователя
    // Возвращаем пользовательские данные в виде объекта или промиса
    return new Promise((resolve, reject) => {
        // Здесь может быть запрос к базе данных или другая логика получения данных
        // В примере возвращается просто объект с фиктивными данными
        const userData = {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
        };

        // Возвращаем пользовательские данные
        resolve(userData);
    });
}
export function registerUser(userData) {
    // Ваша логика регистрации нового пользователя
    // Здесь может быть запрос к базе данных или другая логика сохранения данных

    // Возвращаем промис, который разрешается после успешной регистрации
    return new Promise((resolve, reject) => {
        // Здесь может быть логика сохранения данных в базе данных
        // В примере просто выводятся данные нового пользователя в консоль
        console.log('New user registered:', userData);

        // Возвращаем успешный результат регистрации
        resolve();
    });
}
export const housesData = [
    {
        id: 1,
        type: 'Дом',
        name: 'Дом 1',
        email: 'bekbolotovakerez@gmail.com',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House1,
        imageLg: House1Lg,
        country: 'Бишкек',
        address: 'ул. Фрунзе, CA 90260',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 км кв',
        year: '2016',
        price: '110000',
        agent: {
            image: Agent1,
            name: 'Элмира Кошоева',
            phone: '0123 456 78910',
        },
    },
    {
        id: 2,
        type: 'Дом',
        name: 'Дом 2',
        email: 'bgulaida@gmail.com',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House2,
        imageLg: House2Lg,
        country: 'Жалал-Абад',
        address: 'Аксы, ул. И. Арабаев NJ 08807',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 км кв',
        year: '2016',
        price: '140000',
        agent: {
            image: Agent2,
            name: 'Дайыр Асанов',
            phone: '0123 456 78910',
        },
    },
    {
        id: 3,
        type: 'Дом',
        name: 'Дом 3',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House3,
        imageLg: House3Lg,
        country: 'Бишкек',
        address: 'ул. И.Ахунбаев, VA 22304',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 км кв',
        year: '2016',
        price: '170000',
        agent: {
            image: Agent3,
            name: 'Болот',
            phone: '0123 456 78910',
        },
    },
    {
        id: 4,
        type: 'Дом',
        name: 'Дом 4',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House4,
        imageLg: House4Lg,
        country: 'Нарын',
        address: 'Нарын, ул. Токтогул FL 32927',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 км кв',
        year: '2016',
        price: '200000',
        agent: {
            image: Agent4,
            name: 'Эржан Бакытов',
            phone: '0123 456 78910',
        },
    },
    {
        id: 5,
        type: 'Дом',
        name: 'Дом 5',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",
        image: House5,
        imageLg: House5Lg,
        country: 'Бишкек',
        address: 'ул. Б. Минжылкиев, PA 18974',
        bedrooms: '5',
        bathrooms: '3',
        surface: '4200 км кв',
        year: '2015',
        price: '210000',
        agent: {
            image: Agent5,
            name: 'Калыс',
            phone: '0123 456 78910',
        },
    },
    {
        id: 6,
        type: 'Дом',
        name: 'Дом 6',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",    image: House6,
        imageLg: House6Lg,
        country: 'Бишкек',
        address: 'ул. Медерова, MT 59701',
        bedrooms: '6',
        bathrooms: '3',
        surface: '6200 км кв',
        year: '2014',
        price: '220000',
        agent: {
            image: Agent6,
            name: 'Акылбек',
            phone: '0123 456 78910',
        },
    },
    {
        id: 7,
        type: 'Квартира',
        name: 'Квартира 1',
        description: "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",
        image: Apartment1,
        imageLg: Apartment1Lg,
        country: 'Ош',
        address: 'Ош ул. С.Шарипов, MT 59701',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1200 км кв',
        year: '2012',
        price: '20000',
        agent: {
            image: Agent7,
            name: 'Назар Абдуллаев',
            phone: '0123 456 78910',
        },
    },
    {
        id: 8,
        type: 'Квартира',
        name: 'Квартира 2',
        description:
            "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",         image: Apartment2,
        imageLg: Apartment2Lg,
        country: 'Талас',
        address: 'рай. Кара-Бура ул. Манас, PA 18974',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1000 км кв',
        year: '2011',
        price: '30000',
        agent: {
            image: Agent8,
            name: 'Жазгул',
            phone: '0123 456 78910',
        },
    },
    {
        id: 9,
        type: 'Квартира',
        name: 'Квартира 3',
        description:
            "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",         image: Apartment3,
        imageLg: Apartment3Lg,
        country: 'Чуй',
        address: 'Беловодский ул. Н. Исанов, FL 32927',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1100 км кв',
        year: '2011',
        price: '40000',
        agent: {
            image: Agent9,
            name: 'Жаныбек Оморов',
            phone: '0123 456 78910',
        },
    },
    {
        id: 10,
        type: 'Дом',
        name: 'Дом 7',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House7,
        imageLg: House7Lg,
        country: 'Баткен',
        address: 'рай. Кызыл-Кыя ул. М.Элебаев, CA 90260',
        bedrooms: '5',
        bathrooms: '3',
        surface: '3200 км кв',
        year: '2015',
        price: '117000',
        agent: {
            image: Agent10,
            name: 'Венера Осконова',
            phone: '0123 456 78910',
        },
    },
    {
        id: 11,
        type: 'Дом',
        name: 'Дом 8',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House8,
        imageLg: House8Lg,
        country: 'Ош',
        address: 'рай. Ноокат ул. М. Ауезов, NJ 08807',
        bedrooms: '7',
        bathrooms: '2',
        surface: '2200 км кв',
        year: '2019',
        price: '145000',
        agent: {
            image: Agent11,
            name: 'Айгул Исаева',
            phone: '0123 456 78910',
        },
    },
    {
        id: 12,
        type: 'Дом',
        name: 'Дом 9',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House9,
        imageLg: House9Lg,
        country: 'Нарын',
        address: 'рай. Кочкор ул. Б. Бейшеналиева, VA 22304',
        bedrooms: '4',
        bathrooms: '4',
        surface: '4600 км кв',
        year: '2015',
        price: '139000',
        agent: {
            image: Agent12,
            name: 'Дастан',
            phone: '0123 456 78910',
        },
    },
    {
        id: 13,
        type: 'Дом',
        name: 'Дом 10',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House10,
        imageLg: House10Lg,
        country: 'Ысык-Кол',
        address: 'рай. Тон ул. А.Осмонов, FL 32927',
        bedrooms: '5',
        bathrooms: '2',
        surface: '5200 км кв',
        year: '2014',
        price: '180000',
        agent: {
            image: Agent1,
            name: 'Аман',
            phone: '0123 456 78910',
        },
    },
    {
        id: 14,
        type: 'Дом',
        name: 'Дом 11',
        description:
            "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",        image: House11,
        imageLg: House11Lg,
        country: 'Бишкек',
        address: ' Сокулук , ул. Ак-Доолот PA 18974',
        bedrooms: '5',
        bathrooms: '2',
        surface: '3200 км кв',
        year: '2011',
        price: '213000',
        agent: {
            image: Agent2,
            name: 'Асыл Аманов',
            phone: '0123 456 78910',
        },
    },
    {
        id: 15,
        type: 'Дом',
        name: 'Дом 12',
        description: "Продается новый особняк в центре города. Дом с евро-ремонтом, рассчитан для большой семьи. " +
            "Документы - Тех паспорт. Дом был построен из дорогих материалов. Имеется зона барбекю (очок-хана), видео-наблюдения, навес на 4 машины. Высота потолков - 3.2 метра. Готов к эксплуатации. Успейте приобрести дом своей мечты !",
        image: House12,
        imageLg: House12Lg,
        country: 'Жалал-Абад',
        address: 'Жалал-Абад ул. А.Токомбаев, MT 59701',
        bedrooms: '4',
        bathrooms: '3',
        surface: '5200 км кв',
        year: '2023',
        price: '221000',
        agent: {
            image: Agent3,
            name: 'Бакыт Осмонбеков',
            phone: '0123 456 78910',
        },
    },
    {
        id: 16,
        type: 'Квартира',
        name: 'Квартира 16',
        description:
            "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",         image: Apartment4,
        imageLg: Apartment4Lg,
        country: 'Canada',
        address: '32 Pawnee Street Butte, MT 59701',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1300 sq ft',
        year: '2011',
        price: '21000',
        agent: {
            image: Agent4,
            name: 'Kaitlyn Gonzalez',
            phone: '0123 456 78910',
        },
    },
    {
        id: 17,
        type: 'Квартира',
        name: 'Квартира 17',
        description:
            "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",         image: Apartment5,
        imageLg: Apartment5Lg,
        country: 'Бишкек',
        address: 'ул. Киев, PA 18974',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1000 км кв',
        year: '2012',
        price: '32000',
        agent: {
            image: Agent5,
            name: 'Жанна',
            phone: '0123 456 78910',
        },
    },
    {
        id: 18,
        type: 'Квартира',
        name: 'Квартира 18',
        description:
            "Продаю 4-х комнатный пентхаус в новом доме, с дизайнерским ремонтом, 140 кв.м., 9 и 10 этаж.\n" +
            "На первом этаже кухня с панорамными окнами, зал, сан.узел.\n" +
            "На втором этаже: спальня с лоджией, детская, гостевая комната и сан.узел с джакузи. В квартире имеется дорогая мебель," +
            " бытовая техника (стиральная машина, посудомоечная машина, духовка, микроволновая печь, холодильник, пылесос, телевизор, аристон и т.п.) Имеется кондиционеры",         image: Apartment6,
        imageLg: Apartment6Lg,
        country: 'Нарын',
        address: 'рай. Ат-Башы ул. Ак-Кайын, FL 32927',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1200 sq ft',
        year: '2010',
        price: '38000',
        agent: {
            image: Agent6,
            name: 'Бактыгул Мээрбекова',
            phone: '0123 456 78910',
        },
    },
];
