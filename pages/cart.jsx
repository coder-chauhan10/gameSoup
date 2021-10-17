import React, { useEffect, useState } from 'react'
import GameCard from '../components/gameCard';
import Layout from '../components/layout'
import gamesList from '../public/data/games_list';

const Cart = () => {
	const [total, settotal] = useState(0);
	const cartList = JSON.parse(localStorage.getItem("cart"));
	// console.log(cartList)
	useEffect(() => {
		
		cartList.map((data) => {
			const price = total + parseInt(gamesList[data].paid.price.slice(1,))
			settotal(price)
		})
		return () => {
		}
	}, [])
	return (
		<Layout title="Cart | GameSoup">
			<div className=" relative md:pl-10 pt-10 text-myOrange md:block flex justify-center capitalize font-bold opacity-50 text-9xl">
				cart
			</div>
			<div className="relative flex justify-between w-full px-20">
				<div className="w-[70%]">
					{!cartList && "nothing in cart"}
					{cartList && cartList.map((data, key) => <>
						<GameCard key={key} game={data} cart></GameCard>
					</>)}
				</div>
				<div className="w-[25%] bg-myOrange text-white capitalize rounded px-3 py-4">
					<div>summary</div>
					<table className="w-full text-left">
						<tr>
							<th>name</th>
							<th>price</th>
						</tr>
						{cartList.map((data, key) => (
							<tr>
								<td>{gamesList[data].name}</td>
								<td>{gamesList[data].paid.price}</td>
							</tr>
						))}
						<tr>
							<th>total</th>
							<td>{`₹${total}.00`}</td>
						</tr>
					</table>
				</div>
			</div>
		</Layout>
	)
}

export default Cart
