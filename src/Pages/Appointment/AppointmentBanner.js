import React from 'react'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const AppointmentBanner = ({ data, setDate }) => {
	return (
		<div className='hero min-h-screen '>
			<div className='hero-content flex-col lg:flex-row-reverse p-0'>
				<img
					src={chair}
					className='max-w-sm rounded-lg'
					alt='Dentist Chair'
				/>
				<div>
					<DayPicker mode='single' selected={data} onSelect={setDate} />
				</div>
			</div>
		</div>
	)
}

export default AppointmentBanner
