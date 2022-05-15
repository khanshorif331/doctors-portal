import React, { useState } from 'react'
import Footer from '../Shared/Footer'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments'

const Appointment = () => {
	const [date, setDate] = useState(new Date())
	console.log(date)
	return (
		<div>
			<AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
			<AvailableAppointments date={date}></AvailableAppointments>
			<Footer></Footer>
		</div>
	)
}

export default Appointment
