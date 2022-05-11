import React from 'react'
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
	const services = [
		{
			_id: 1,
			name: 'Fouride Treatment',
			description:
				' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta vitae nesciunt optio consequatur provident.',
			img: flouride,
		},
		{
			_id: 2,
			name: 'Cavity Filling',
			description:
				' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta vitae nesciunt optio consequatur provident.',
			img: cavity,
		},
		{
			_id: 3,
			name: 'Teeth Whitening',
			description:
				' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta vitae nesciunt optio consequatur provident.',
			img: whitening,
		},
	]
	return (
		<div className='my-28'>
			<div className='text-center'>
				<h3 className='text-primary text-xl font-bold uppercase'>
					Our Services
				</h3>
				<h2 className='text-4xl'>Services We Provide</h2>
			</div>
			<div className='mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
				{services.map(service => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
		</div>
	)
}

export default Services
