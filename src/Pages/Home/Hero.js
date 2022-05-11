import React from 'react'
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Hero = () => {
	return (
		<div class='hero min-h-screen w-full'>
			<div class='hero-content flex-col lg:flex-row'>
				<div className='flex-1'>
					<img
						src={treatment}
						className='max-w-sm md:max-w-md rounded-lg shadow-2xl mx-auto'
					/>
				</div>
				<div className='flex-1'>
					<h1 class='text-5xl font-bold'>
						Exceptional Dental Care,on Your Terms
					</h1>
					<p class='py-6 leading-8 tracking-wide font-semi-bold text-justify'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti eaque
						aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Blanditiis unde numquam commodi
						necessitatibus dolor corrupti autem in dignissimos impedit
						sint?
					</p>
					<PrimaryButton>Get Started</PrimaryButton>
				</div>
			</div>
		</div>
	)
}

export default Hero
