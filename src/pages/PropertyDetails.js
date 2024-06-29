import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { BiArea, BiBath, BiBed } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { housesData } from '../data';

const PropertyDetails = () => {
	const form = useRef();

	const user = JSON.parse(localStorage.getItem('user'));

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_wsbtjkh',
				'template_3o8tjxf',
				e.target,
				'0jmUw86no9vqNSk59'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	const { id } = useParams();
	const house = housesData.find(house => {
		return house.id === parseInt(id);
	});
	return (
		<section>
			<div className=' container mx-auto min-h-[800px] my-24 '>
				<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
					<div>
						<h2 className='text-2xl font-semibold'>{house.name}</h2>
						<h3 className=' text-lg mb-4'>{house.address}</h3>
					</div>
					<div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
						<div className='bg-green-500 text-white px-3 rounded-full'>
							{house.type}
						</div>
						<div className='bg-violet-500 text-white px-3 rounded-full'>
							{house.country}
						</div>
					</div>
					<div className='text-violet-600 text-3xl font-semibol '>
						{house.price} сом
					</div>
				</div>

				<div className='flex flex-col items-start gap-8 lg:flex-row'>
					<div className='max-w-[768px]'>
						<div className='mb-8'>
							<img src={house.imageLg} alt='' className='w-[700px]' />
						</div>
						<div className='flex gap-x-6 text-violet-700 mb-6'>
							<div className='flex gap-x-2 items-center'>
								<BiBed className='text-2xl' />
								<div>{house.bedrooms}</div>
							</div>
							<div className='flex gap-x-2 items-center'>
								<BiBath className='text-2xl' />
								<div>{house.bathrooms}</div>
							</div>
							<div className='flex gap-x-2 items-center'>
								<BiArea className='text-2xl' />
								<div>{house.surface}</div>
							</div>
						</div>
						<div>{house.description}</div>
					</div>

					<div
						className='flex-1 bg-white w-full mb-8 border
          border-gray-300 rounded-lg px-6 py-8'>
						<div className=' flex items-center  gap-x-4 mb-8'>
							<div
								className=' w-20 h-20 p-1 border
                  border-gray-300 rounded-full'>
								<img src={house.agent.image} alt='' />
							</div>
							<div>
								<div className='font-bold text-lg '>{house.agent.name}</div>
								<Link to='' className=' text-violet-700 text-sm'>
									Посмотреть
								</Link>
							</div>
						</div>
						<form onSubmit={sendEmail}>
							<input
								name='name'
								className='form-control border border-gray-300
                    focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
								type='text'
								placeholder='Имя'
								defaultValue={user?.name}
								readOnly={user}
							/>
							<input
								className='form-control border border-gray-300
                    focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm my-4'
								type='email'
								name='user_email'
								placeholder='Email'
								defaultValue={user?.email}
								readOnly={user}
							/>
							<input
								className='form-control border border-gray-300
                    focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
								type='tell'
								name='phone'
								placeholder='Телефон'
							/>
							<textarea
								name='message'
								className='form-control  border border-gray-300
                        focus:border-violet-700 outline-none
                        resize-name rounded w-full p-4 h-36 text-sm text-gray-400 my-4'
								placeholder='Сообщение*'>
								{' '}
							</textarea>
							<div className=' flex gap-x-2'>
								<input
									type='submit'
									value='Отправить'
									className=' form-control bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition
                                       '
								/>
								<button className=' bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition'>
									<a href='tel:+996702868596'>Позвонить</a>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PropertyDetails;
