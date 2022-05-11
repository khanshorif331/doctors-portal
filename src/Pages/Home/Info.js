import React from 'react'
import clock from '../../assets/icons/clock.svg'

const Info = () => {
	return (
		<div>
			<div>
				<div>
					<img style={{ width: '15px' }} src={clock} alt='' />
				</div>
				<div>
					<h1>Opening Hours</h1>
					<p>The chambers will is open from 6pm-8pm</p>
				</div>
			</div>
		</div>
	)
}

export default Info
