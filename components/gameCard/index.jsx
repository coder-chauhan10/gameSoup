import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import gameList from '../../public/data/games_list';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const GameCard = ({display, game}) => {
	const mygame = gameList[game];
	return (
		<>
		{display ? (
			<div className="relative flex flex-col font-normal text-lg items-center overflow-hidden rounded shadow-md">
				<Link href={`/games/i/${game}`}>
					<a className="w-full flex flex-col items-center">
						<Image
							src={`/images/games/display/${mygame.id}.${mygame.image}`}
							height={300}
							width={200}
						/>
						<div >
							<span>{mygame.name}</span>
							<span className="px-1">•</span>
							<span className="lowercase text-myGray-dark">{(gameList[game].paid.paid) ? "paid" : "free"}</span>
						</div>
						<div>
							<span>{(gameList[game].paid.paid) ? `${gameList[game].paid.price}` : "₹00.00"}</span>
						</div>
					</a>
				</Link>
				<div className="cursor-pointer flex bg-myBlue-norm text-white w-full justify-center py-1"><ShoppingCartIcon className="w-5"/> add to cart</div>
			</div>

		) : (
			<>
				<div className="md:block hidden relative rounded shadow overflow-hidden group">
					<div className="relative flex">
						<Image
							src={`/images/games/display/${mygame.id}.${mygame.image}`}
							height={300}
							width={200}
						/>
					</div>
					<div className="absolute top-0 left-0 w-full h-full hidden group-hover:block">
						<div className="absolute top-0 left-0 w-full h-full bg-myBlack-dark opacity-50"/>
						<div className="absolute top-0 left-0 w-full h-full text-white">
							<Link href={`/games/i/${game}`}>
								<a className="flex justify-center items-center flex-col h-[85%]">
									<div><ArrowCircleRightIcon className="w-9" /></div>
									<div>
										<span>{mygame.name}</span>
										<span className="px-1">•</span>
										<span className="lowercase text-myGray-dark">{(gameList[game].paid.paid) ? "paid" : "free"}</span>
									</div>
									<div className="my-2">{(gameList[game].paid.paid) ? `${gameList[game].paid.price}` : "₹00.00"}</div>
								</a>
							</Link>
							<div className="w-full h-[15%] bg-myBlue-norm text-white flex justify-center items-center"><ShoppingCartIcon className="w-5"/> add to cart</div>
						</div>
					</div>
				</div>
				<div className="md:hidden relative flex font-normal text-lg items-center overflow-hidden rounded shadow-md">
				<Link href={`/games/i/${game}`}>
					<a className="flex">
						<Image
							src={`/images/games/display/${mygame.id}.${mygame.image}`}
							height={300}
							width={200}
						/>
					</a>
				</Link>
				<div className="w-full flex flex-col h-full">
					<Link href={`/games/i/${game}`}>
						<a className="w-full flex flex-col items-center h-[80%] justify-center">
							<div >
								<span>{mygame.name}</span>
								<span className="px-1">•</span>
								<span className="lowercase text-myGray-dark">{(gameList[game].paid.paid) ? "paid" : "free"}</span>
							</div>
							<div>
								<span>{(gameList[game].paid.paid) ? `${gameList[game].paid.price}` : "₹00.00"}</span>
							</div>
						</a>
					</Link>
					<div className="cursor-pointer flex bg-myBlue-norm text-white w-full h-[20%] justify-center items-center"><ShoppingCartIcon className="w-5"/> add to cart</div>
				</div>
			</div>
			</>
		)}
		</>
	)
}

export default GameCard
