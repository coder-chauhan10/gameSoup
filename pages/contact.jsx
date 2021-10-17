import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
	return (
		<Layout page="contact" title="Contacts | GameSoup">
			<div className="md:pl-10 pt-10 text-myOrange md:block flex justify-center capitalize font-bold opacity-50 text-9xl">
				contact
			</div>
			<div className="px-20 capitalize w-full">
				<table className="w-full">
					<tr>
						<td>participent 1</td>
						<td>shubham</td>
					</tr>
					<tr>
						<td>participent 2</td>
						<td>punit</td>
					</tr>
					<tr>
						<td>instagram</td>
						<td>@shubham.__rajput</td>
					</tr>
					<tr>
						<td>school code</td>
						<td>T008</td>
					</tr>
					<tr>
						<td>school</td>
						<td>Army Public School, Hisar</td>
					</tr>
				</table>
			</div>
		</Layout>
	)
}

export default Contact
