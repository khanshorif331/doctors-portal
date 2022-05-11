import React from 'react'
import Banner from './Banner'
import Hero from './Hero'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'

const Home = () => {
	return (
		<div className='px-12'>
			<Banner></Banner>
			<Info></Info>
			<Services></Services>
			<Hero></Hero>
			<MakeAppointment></MakeAppointment>
		</div>
	)
}

export default Home
