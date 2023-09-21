import { BsStars } from 'react-icons/bs'
import Spark from '/images/spark.png'
import Chain from '/images/chain.png'
import Curve from '/images/curve.png'
import Bulb from '/images/bulb.png'
import Globe from '/images/hackathonGlobe.png'
import Hackathonguy from '/images/man-wear.png'
import { Link } from 'react-router-dom'

export default function Main() {

  return (
    <section 
      className="relative flex flex-col md:flex-row midscreen:items-center w-full font-sans py-4">

      <div className="flex flex-col items-center w-full gap-6 p-8 py-4">

        <div className='flex flex-col gap-1.5 w-fit midscreen:items-center md:absolute md:right-10 md:top-0'>
          <h2 className="italic tracking-wide font-medium">Igniting a Revolution in HR Innovation</h2>
          <figure className='self-end h-0.5 -mt-1.5 rounded-full w-24'>
            <img src={Curve} alt="chain" 
              className='w-full object-cover'
            />
          </figure>
        </div>

        <BsStars className='text-xs'/>

        <div className="w-full text-4xl flex flex-col items-center">

          <div className="relative font-bold">
            <img src={Bulb} alt="" className='absolute right-11 -top-2 w-4'/>
            <h3 className='text-center md:text-5xl'>getlinkedTech</h3>
            <div className="flex text-center items-center">
              <h3>Hackathon</h3>
              <h3 className="text-[#D434FE]">1.0</h3>
              <img src={Chain} alt="chain" 
                className='w-7 object-cover'
              />
              <img src={Spark} alt="chain" 
                className='w-6 object-cover'
              />
            </div>
          </div>

        </div>

        <div className="monstera text-[13px]">
          <p>Participate in getLinked tech Hackathon</p>
          <p>2023 stand a chance to win a Big prize</p>
        </div>

        <Link to={'/register'} className='bg-gradient-to-r to-indigo-500 from-pink-500 rounded-sm text-xs p-3 px-10 hover:opacity-90 transition-all'>
          Register
        </Link>

        <div className="barlow flex items-center text-4xl gap-7">
          <p className="relative flex items-center">
            <span>00</span>
            <span className="absolute -right-2 bottom-0.5 text-xs">H</span>
          </p>
          <p className="relative flex items-center">
            <span>00</span>
            <span className="absolute -right-2 bottom-0.5 text-xs">M</span>
          </p>
          <p className="relative flex items-center">
            <span>00</span>
            <span className="absolute -right-2 bottom-0.5 text-xs">S</span>
          </p>
        </div>

      </div>

      <figure className='relative w-screen md:w-[90%] md:pt-5'>
        <img src={Hackathonguy} alt="" loading='eager' className='w-full opacity-90 filter drop-shadow-xl'/>
        <img src={Globe} alt="" loading='eager' className='absolute top-0 w-full opacity-90 h-[97%] drop-shadow-xl'/>
      </figure>

    </section>
  )
}