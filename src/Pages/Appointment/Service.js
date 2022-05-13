import React from 'react'

const Service = ({ service, setTreatment }) => {
	const { name, slots } = service
	return (
		<div class='card lg:max-w-lg bg-base-100 shadow-xl'>
			<div class='card-body'>
				<h2 class='card-title text-secondary mx-auto'>{name}</h2>
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
				<div class='card-actions justify-center'>
					<label
						for='booking-modal'
						onClick={() => setTreatment(service)}
						disabled={slots.length === 0}
						class='btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase cursor-pointer'
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	)
}

export default Service
