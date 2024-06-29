import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async event => {
		event.preventDefault();

		setIsLoading(true);

		console.log(event.target);

		const email = event.target.email.value;

		const response = await fetch(
			`https://667ff04856c2c76b495a9aa4.mockapi.io/users?email=${email}`
		);

		const user = await response.json();

		console.log(user);
		const userPassword = user[0].password;

		if (userPassword === event.target.password.value) {
			localStorage.setItem('userId', user[0].id);
			localStorage.setItem('user', JSON.stringify(user[0]));

			navigate('/');
			window.location.reload();
		}

		alert('Неверный логин или пароль');
	};

	return (
		<div className='w-1/2 mx-auto mt-24 py-24 mb-4'>
			<h2 className='text-2xl font-bold mb-4'>Авторизация</h2>
			<form
				onSubmit={onSubmit}
				className='bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-2xl'>
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
						name='email'
						placeholder='Введите ваш email'
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
						name='password'
						placeholder='Введите пароль'
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						disabled={isLoading}
						className='w-1/2  mx-auto bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						{isLoading ? 'Загрузка...' : 'Войти'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
