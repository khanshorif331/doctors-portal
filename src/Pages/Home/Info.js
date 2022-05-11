import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard'

const Info = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
			<InfoCard img={clock}></InfoCard>
			<InfoCard img={marker}></InfoCard>
			<InfoCard img={phone}></InfoCard>
		</div>
	)
}

export default Info
