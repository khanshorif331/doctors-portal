import React from 'react'

const DoctorRow = ({ doctor, index }) => {
	const { name, specialty } = doctor
	return (
		<tr>
			<th>{index + 1}</th>
			<td>Avatar : </td>
			<td>{name}</td>
			<td>{specialty}</td>
			<td>Blue</td>
		</tr>
	)
}

export default DoctorRow
