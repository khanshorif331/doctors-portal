import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import Contact from './Contact'
import Hero from './Hero'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
	return (
		<div className='w-full'>
			<Banner></Banner>
			<Info></Info>
			<Services></Services>
			<Hero></Hero>
			<MakeAppointment></MakeAppointment>
			<Testimonials></Testimonials>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	)
}

export default Home
