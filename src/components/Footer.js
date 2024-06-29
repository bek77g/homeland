import React from 'react';

const Footer = () => {
	return (
		<footer className=' bg-black py-8 text-white'>
			<div className='container text-center'>
				Copyright &copy; {new Date().getFullYear()} All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
