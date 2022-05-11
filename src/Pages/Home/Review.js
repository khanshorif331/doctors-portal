import React from 'react'

const Review = ({ review }) => {
	return (
		<div className='card lg:max-w-lg bg-base-100 shadow-xl'>
			<div className='card-body'>
				<p>
					If a dog chews shoes whose shoes does he choose Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Quia sint iusto,
					itaque sapiente ducimus alias.
				</p>
				<div className='flex items-center'>
					<div className='avatar'>
						<div className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5'>
							<img src={review.img} alt='' />
						</div>
					</div>
					<div>
						<h4 className='text-xl'>{review.name}</h4>
						<p>{review.location}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
