import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
	return (
		<section
			style={{
				background: `url(${appointment})`,
			}}
			className='flex justify-center items-center mt-12'
		>
			<div className='flex-1 hidden lg:block'>
				<img className='mt-[-100px]' src={doctor} alt='' />
			</div>
			<div className='flex-1 p-5 text-justify'>
				<h3 className='text-xl text-primary font-bold my-4'>Appointment</h3>
				<h2 className='text-3xl text-white py-4'>
					Make An Appointment Today
				</h2>
				<p className='text-white leading-8 my-4'>
					Everyday the session starts from the evening. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Delectus provident ipsum,
					incidunt reprehenderit pariatur nemo molestiae rerum? Eveniet
					asperiores laborum quod eaque vero, incidunt deserunt suscipit,
					voluptatum eius magnam nostrum, veritatis culpa facere cumque
					fuga quidem temporibus atque totam nesciunt!
				</p>
				<PrimaryButton>Get Started </PrimaryButton>
			</div>
		</section>
	)
}

export default MakeAppointment
