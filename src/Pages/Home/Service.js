import React from 'react'

const Service = ({ service }) => {
	return (
		<div className='card w-full md:w-full  bg-base-100 shadow-xl mx-auto'>
			<figure className='pt-10'>
				<img src={service.img} alt='Shoes' className='rounded-xl' />
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{service.name}</h2>
				<p>{service.description}</p>
			</div>
		</div>
	)
}

export default Service
