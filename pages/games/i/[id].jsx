import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import gameDescription from '../../../public/data/games_description'
import GameCard from '../../../components/gameCard'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'

const Info = () => {
	const [ssPosition, setssPosition] = useState(0)
	const router = useRouter();
	const {id} = router.query;
	const mygame = gameDescription[id];

	const changePic = (option) => {
		let checkPosition = ssPosition;
		(option == "+") ? checkPosition = checkPosition+1 : checkPosition = checkPosition-1;
		if (checkPosition >= 0 && checkPosition < mygame.screenshot.length) {
			setssPosition(checkPosition);
		} else if (checkPosition < 0) {
			setssPosition(mygame.screenshot.length-1);
		} else if (checkPosition >= mygame.screenshot.length) {
			setssPosition(0);
		}
	}
	return (
		<>
		{mygame && <Layout page="games" title={`${mygame.name} | GameSoup`}>
			<div className="relative">
				<div className="relative w-full md:h-96 h-52 overflow-hidden flex items-center">
					<img
						src={`/images/games/banner/${mygame.id}.${mygame.banner}`}
						className="w-full"
					/>
				</div>
			</div>
			<div className="relative md:px-20 px-10 md:py-10 py-5">
				<div className="relative flex md:flex-row flex-col-reverse">
					<div className="pr-8">
						<div className="font-medium text-lg my-4">Description</div>
						{mygame.description.map((para, index) => <p key={index} className="my-2">{para}</p>)}
					</div>

					<div className="relative md:w-[40%] w-full px-2">
						<GameCard game={mygame.id} display />
					</div>
				</div>
			</div>

			<div className="relative px-20 py-10 flex flex-col items-center">
				<Image
					src={`/images/games/screenshots/${mygame.id}_${mygame.screenshot[ssPosition]}`}
					height={200}
					width={400}
				/>
				<div className="flex">
					<div className="cursor-pointer" onClick={() => changePic("-")}><ArrowCircleLeftIcon className="w-10" /></div>
					<div className="cursor-pointer" onClick={() => changePic("+")}><ArrowCircleRightIcon className="w-10" /></div>
				</div>
			</div>
			<div className="relative md:px-20 px-10 flex justify-between md:flex-row flex-col">
				<div>
					<div className="font-bold">Minimum Requirements</div>
					<ul>
						{mygame.minimumReq.map((data, key) => <li key={key}>{data}</li>)}
					</ul>
				</div>
				<div>
					<div className="font-bold">Recomended Requirements</div>
					<ul>
						{mygame.recomendedReq.map((data, key) => <li key={key}>{data}</li>)}
					</ul>
				</div>
			</div>
		</Layout>}
		</>
	)
}

export default Info
