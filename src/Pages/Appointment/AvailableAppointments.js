import { format } from 'date-fns'
import React from 'react'

const AvailableAppointments = ({ date }) => {
	return (
		<div>
			<h1 className='text-xl text-secondary text-center'>
				Available Appointments on : {format(date, 'PP')}
			</h1>
		</div>
	)
}

export default AvailableAppointments
