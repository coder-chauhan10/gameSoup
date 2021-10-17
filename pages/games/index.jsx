import React from 'react'
import GameCard from '../../components/gameCard'
import Layout from '../../components/layout'
import gamesList from '../../public/data/games_list'

const Games = () => {
	const listOgames = Object.keys(gamesList);
	// console.log(listOgames);
	return (
		<Layout page="games" title="Games | GameSoup">
			<div className="md:pl-10 pt-10 text-myOrange md:block flex justify-center capitalize font-bold opacity-50 text-9xl">
				games
			</div>
			<div className="md:px-20 px-10 py-10 w-full grid md:grid-cols-4 grid-cols-1 gap-5 md:gap-1">
				{listOgames.map((game, index) => <div key={index} className="flex justify-center"><GameCard game={game} /></div>)}
			</div>
		</Layout>
	)
}

export default Games
