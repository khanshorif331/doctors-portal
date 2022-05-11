import React from 'react'
import background from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Contact = () => {
	return (
		<section
			className='w-full mb-4'
			style={{
				background: `url(${background})`,
			}}
		>
			<div className='mx-auto'>
				<h4 className='text-xl text-primary text-center pt-11'>
					Contact Us
				</h4>
				<h1 className='text-3xl text-white text-center'>
					Stay Connected With Us
				</h1>
			</div>
			<div className='mx-auto mb-5'>
				<form className='w-full md:w-1/2 mx-auto pb-10'>
					<input
						className='mt-6 w-3/4 py-3 mx-auto block px-2 border rounded-lg'
						type='text'
						name=''
						id=''
						placeholder='Email Address'
					/>{' '}
					<br />
					<input
						className='my-2 w-3/4 py-3 mx-auto block px-2 border rounded-lg'
						type='text'
						name=''
						id=''
						placeholder='Subject'
					/>{' '}
					<br />
					<textarea
						className='w-full md:w-3/4 py-3 mx-auto block px-2 border rounded-lg'
						name=''
						id=''
						cols='30'
						rows='4 '
						placeholder='Your Message'
					></textarea>
					<br />
					<input
						className='block mx-auto px-6 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'
						type='submit'
						value='Submit'
					/>
				</form>
			</div>
		</section>
	)
}

export default Contact
