import React, { useEffect, useState } from 'react';
import { getUserData } from '../../data';

const PersonalDashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Получение данных о пользователе при загрузке компонента личного кабинета
        const userId = localStorage.getItem('userId'); // Предполагается, что у вас есть уникальный идентификатор пользователя
        getUserData(userId)
            .then((response) => {
                // Обработка успешного ответа сервера
                setUserData(response.data); // Установка данных о пользователе в состояние
            })
            .catch((error) => {
                // Обработка ошибки сервера
                console.error(error);
            });
    }, []);

    if (!userData) {
        return <div>Loading...</div>; // Пока данные загружаются, отображается загрузочное сообщение
    }

    return (
        <div className="mt-36 py-12">
            <h2>Личный кабинет</h2>
            <h2>Личный кабинет</h2>
            <h2>Личный кабинет</h2>
            <h2>Личный кабинет</h2>
            <h2>Личный кабинет</h2>
            <h2>Личный кабинет</h2>
            <p>Имя пользователя: {userData.username}</p>
            <p>Email: {userData.email}</p>
            {/* Остальные данные о пользователе */}
        </div>
    );
};

export default PersonalDashboard;
