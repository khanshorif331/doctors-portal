import React from 'react'
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton'
import './Banner.css'

const Banner = () => {
	return (
		<div className='hero min-h-screen mx-auto w-full back-image'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<img src={chair} className=' rounded-lg shadow-2xl max-w-sm' />
				<div>
					<h1 className='text-5xl font-bold'>
						Your New Smile Starts Here
					</h1>
					<p className='py-6  text-lg leading-loose md:text-xl'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti eaque
						aut repudiandae et a id nisi.
					</p>
					<PrimaryButton>Get Started</PrimaryButton>
				</div>
			</div>
		</div>
	)
}

export default Banner
