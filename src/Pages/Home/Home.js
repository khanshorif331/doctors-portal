import React from 'react'
import Banner from './Banner'
import Hero from './Hero'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
	return (
		<div className='px-12'>
			<Banner></Banner>
			<Info></Info>
			<Services></Services>
			<Hero></Hero>
			<MakeAppointment></MakeAppointment>
			<Testimonials></Testimonials>
		</div>
	)
}

export default Home
