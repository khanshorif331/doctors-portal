import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const MyAppointments = () => {
	const [user] = useAuthState(auth)
	const [appointments, setAppointments] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		if (user) {
			fetch(
				`https://shrouded-reef-50507.herokuapp.com/booking?patient=${user.email}`,
				{
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							'accessToken'
						)}`,
					},
				}
			)
				.then(res => {
					if (res.status === 401 || res.status === 403) {
						signOut(auth)
						localStorage.removeItem('accessToken')
						navigate('/')
					}

					return res.json()
				})
				.then(data => {
					setAppointments(data)
					setLoading(false)
				})
		}
	}, [user])
	return (
		<div>
			{loading && <Loading></Loading>}
			<h1>My Appointments : ${appointments?.length}</h1>
			<div class='overflow-x-auto'>
				<table class='table w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Date</th>
							<th>Time</th>
							<th>Treatment</th>
							<th>Payment</th>
						</tr>
					</thead>
					<tbody>
						{appointments?.map((a, index) => (
							<tr key={index}>
								<th>{index + 1}</th>
								<td>{a.patient}</td>
								<td>{a.date}</td>
								<td>{a.slot}</td>
								<td>{a.treatment}</td>
								<td>
									{a.price && !a.paid && (
										<Link to={`/dashboard/payment/${a._id}`}>
											<button className='btn btn-xs btn-success'>
												Pay
											</button>
										</Link>
									)}
									{a.price && a.paid && (
										<span className='text-success'>Paid</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MyAppointments
