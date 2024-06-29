import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
const Header = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	const onExit = () => {
		localStorage.removeItem('user');
		window.location.reload();
	};

	return (
		<header className=' header top-0 py-6 mb-12 border-b bg-white lg:bg-transparent lg:backdrop-blur w-full fixed'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link to='/' className='h-[24px]'>
					<img src={Logo} alt='' />
				</Link>
				<div className='flex items-center gap-0 lg:gap-6'>
					{!user ? (
						<>
							<Link
								to='/login'
								className=' hover:bg-gray-100 lg:text-sm text-[12px] transition rounded-lg border-violet-700 bg-white  text-violet-600 px-2 py-2 text-center transition w-[150px]  h-[40px] lg:max-w-full'>
								Авторизоваться
							</Link>
							<Link
								to='/registration'
								className='bg-violet-700 lg:text-sm text-[12px] hover:bg-violet-800 text-white px-2 py-2  rounded-lg transition w-[150px] text-center  h-[40px] lg:max-w-full '>
								Зарегистрироваться
							</Link>
						</>
					) : (
						<button
							onClick={onExit}
							className='bg-violet-700 lg:text-sm text-[12px] hover:bg-violet-800 text-white px-2 py-2  rounded-lg transition w-[150px] text-center  h-[40px] lg:max-w-full'>
							Выход
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
