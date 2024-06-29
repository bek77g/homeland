import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [avatar, setAvatar] = useState(null);

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleUsernameChange = event => {
		setUsername(event.target.value);
	};

	const handleEmailChange = event => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
	};

	const handleAvatarChange = event => {
		const file = event.target.files[0];
		setAvatar(file);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		setIsLoading(true);

		// Создаем объект данных пользователя
		const userData = {
			name: event.target.username.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};

		const response = await fetch(
			'https://667ff04856c2c76b495a9aa4.mockapi.io/users',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			}
		);

		const user = await response.json();

		console.log(user);

		localStorage.setItem('userId', user.id);
		localStorage.setItem('user', JSON.stringify(user));

		navigate('/');
		window.location.reload();

		setUsername('');
		setEmail('');
		setPassword('');
		setAvatar(null);
	};

	return (
		<div className='w-1/2 mt-24 py-24 mx-auto'>
			<h2 className='text-2xl font-bold mb-4'>Регистрация</h2>
			<form
				className='bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-2xl'
				onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'>
						Имя пользователя
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='username'
						type='text'
						placeholder='Введите имя пользователя'
						value={username}
						onChange={handleUsernameChange}
						name='username'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='email'
						placeholder='Введите ваш email'
						value={email}
						onChange={handleEmailChange}
						name='email'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'>
						Пароль
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						placeholder='Введите пароль'
						value={password}
						onChange={handlePasswordChange}
						name='password'
					/>
				</div>
				<div className='flex items-center  mx-auto justify-between'>
					<button
						disabled={isLoading}
						className='bg-violet-700 hover:bg-violet-800 mt-8  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegistrationForm;
