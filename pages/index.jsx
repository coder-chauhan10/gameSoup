import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowCircleDownIcon,
  ChevronRightIcon
} from '@heroicons/react/solid'
import Layout from '../components/layout'
import popularGames from '../public/data/popular_games'
import GameCard from '../components/gameCard'

const Home = () => {
  return (
    <>
      <Layout page="home" title="GameSoup">
        <div className="relative">
          <section className="relative md:h-auto h-[90vh] overflow-hidden">
            <img className="md:hidden block" src="https://assets.xboxservices.com/assets/eb/49/eb4923b2-cbeb-4eb4-a703-7b42d18af2f5.jpg?n=Back-4-Blood_Page-Hero-0_767x1175.jpg" media="(min-width:768px)" alt="" />
            <video className="hidden" src="https://assets.xboxservices.com/assets/4c/8b/4c8bd968-0914-4d1f-94cf-bf84e1d0b1d5.mp4?n=Back-4-Blood_HP-Video_1920x720.mp4" controls></video>
            {/* <picture>
              <source class="heronovideomobbiggest" srcSet="https://assets.xboxservices.com/assets/1d/49/1d490f77-52da-4042-aabe-7deacd223db0.jpg?n=Back-4-Blood_Page-Hero-768_1083x1222.jpg" media="(min-width:768px)" src />
              <source class="heronovideomobmedium" srcSet="https://assets.xboxservices.com/assets/eb/49/eb4923b2-cbeb-4eb4-a703-7b42d18af2f5.jpg?n=Back-4-Blood_Page-Hero-0_767x1175.jpg" media="(min-width:540px)" />
              <source class="heronovideomobsmallest" srcSet="https://assets.xboxservices.com/assets/eb/49/eb4923b2-cbeb-4eb4-a703-7b42d18af2f5.jpg?n=Back-4-Blood_Page-Hero-0_767x1175.jpg" media="(min-width:0)" />
              <img class="heronovideomobile" src="https://assets.xboxservices.com/assets/4c/8b/4c8bd968-0914-4d1f-94cf-bf84e1d0b1d5.mp4?n=Back-4-Blood_HP-Video_1920x720.mp4" srcSet="https://assets.xboxservices.com/assets/eb/49/eb4923b2-cbeb-4eb4-a703-7b42d18af2f5.jpg?n=Back-4-Blood_Page-Hero-0_767x1175.jpg" alt="Back 4 Blood, A horde of zombies in the shape of a number 4 surrounds a group of characters." />
            </picture> */}

            <div className="hidden md:block" >
              <img
                src="/images/back 4 blood.svg"
                // height={540}
                // width={1440}
                className="w-full" 
              />
            </div>

            
            <div className="absolute md:top-0 bottom-10 left-0 md:h-full h-auto md:pl-20 pl-10 flex flex-col justify-center text-white">
              <span className="font-black text-7xl uppercase opacity-50 md:tracking-[2.9rem] tracking-widest">back 4 blood</span>
              <span className="text-2xl py-5 capitalize font-thin tracking-wide">Get early access with Deluxe <br/>Edition & Ultimate Edition</span>
              <Link href="/"><a className="flex bg-myBlue-norm rounded py-1 w-36 items-center justify-center">Get It Now <ChevronRightIcon className="w-5 ml-2" /></a></Link>
            </div>
          </section>
          <section className="relative md:h-[176px]">
            <div className="md:absolute relative md:-top-2 top-0 left-0 md:px-20 px-10 w-full flex md:flex-row flex-col items-center justify-between">
              <Image
                src="/game.svg"
                height={179}
                width={250}
                className="opacity-50 md:block hidden"
              />
              <div className="flex flex-col items-end md:text-base text-lg">
                <span className="md:mr-10">Hope is what makes us strong. It is why we are<br />here. It is what we fight with when all else is lost</span>
                <div className="text-myGray-dark">— God Of War</div>
              </div>
              <Image
                src="/gift.svg"
                height={179}
                width={200}
                className="opacity-50"
              />
            </div>
          </section>
          <section className="relative bg-myBlack-dark text-white">
            <span
              className="
                absolute
                top-28
                left-0
                text-myBlue-norm
                text-9xl
                uppercase
                filter
                blur-lg
              "
            >our goal</span>
            <div className="relative flex md:flex-row flex-col justify-between items-center px-20 py-16 uppercase font-extralight md:text-3xl text-2xl">
              <div>
                our <span className="text-myOrange font-light">goal</span> is to make<br/>your <span className="text-myOrange capitalize font-light">dream</span> come true<br/>at a reasonable <span className="text-myOrange capitalize font-light">price</span>
              </div>
              <Image
                src="/undraw_Gaming_re_cma2.svg"
                height={381.88}
                width={572}
              />
            </div>
            <div className="absolute flex bottom-0 left-20 bg-myBlue-norm px-3 py-2 rounded-t-md">
              view some of our products <ArrowCircleDownIcon className="mx-1 w-5" />
            </div>
          </section>
          <section className="relative">
            <span className="
              absolute
              top-28
              left-0
              text-myBlack-dark
              md:text-9xl text-8xl
              uppercase
              filter
              md:blur-lg blur-md
            "><span className="text-myOrange">popular</span> games</span>
            <div className="relative flex justify-around items-center px-20 py-16 uppercase font-extralight text-3xl">
              {popularGames.map((game, index) => (
                <>
                  <GameCard game={game} display />
                </>
              ))}
            </div>

          </section>
        </div>
      </Layout>
    </>
  )
};

export default Home;