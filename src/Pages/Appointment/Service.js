import React from 'react'

const Service = ({ service, setTreatment }) => {
	const { name, slots, price } = service
	return (
		<div className='card lg:max-w-lg bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title text-secondary mx-auto'>{name}</h2>
				<p className='text-center'>
					{slots.length > 0 ? (
						<span>{slots[0]}</span>
					) : (
						<span className='text-red-400'>Try another date.!</span>
					)}
				</p>
				<p className='text-center'>
					{' '}
					{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available{' '}
				</p>
				<p className='text-center'>
					<small>Price: ${price} </small>
				</p>
				<div className='card-actions justify-center'>
					<label
						htmlFor='booking-modal'
						onClick={() => setTreatment(service)}
						disabled={slots.length === 0}
						className='btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase cursor-pointer'
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	)
}

export default Service
