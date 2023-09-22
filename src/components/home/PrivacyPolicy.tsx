import Star from '/images/star.png'
import { BsCheck } from 'react-icons/bs'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import BigLock from '/images/bgLock.png'
import PersonLock from '/images/personLock.png'

export default function PrivacyPolicy() {

  return (
    <section
      id='privacy'
      className='relative flex flex-col md:flex-row px-20 pt-16 pb-40 items-center gap-12 bg-[#191130]'
    >
      <img src={StarGray} alt="star" className='absolute top-10 right-32 object-cover w-2 self-center' loading='lazy' />

      <img src={Star} alt="star" className='absolute top-48 right-32 object-cover w-4 self-center' loading='lazy' />

      <div className='flex flex-col gap-12 lg:pl-10 items-center md:items-start'>

        <div className='monstera relative flex flex-col font-extrabold items-center md:items-start' >
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='font-bold tracking-wide'>Privacy Policy and</h3>
            <h3 className='font-bold tracking-wide text-[#be22e6]'>Terms</h3>
          </div>

          <p className='text-gray-500 text-sm font-normal pb-3'>Last updated on September 12, 2023</p>
    
          <p className='text-[13px] text-gray-200 text-center md:text-left md:indent-0 indent-3 leading-5 font-normal'>
          Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant
          </p>
        </div>

        <div className='monstera relative flex flex-col gap-5 py-12 px-6 md:px-12 border rounded-md w-[350px] mobile:w-[320px] md:w-[400px] md:text-justify md:indent-0 text-[13px] leading-loose indent-3 border-[#be22e6]'>

          <p className='text-center md:text-justify'>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
          </p>

          <div className='flex flex-col gap-3'>

            <div className='flex flex-col'>
              <p className='font-bold tracking-wide text-[#be22e6]'>Licensing Policy</p>
              <p>Here are terms of our Standard License:</p>
            </div>

            <div className='flex flex-col gap-5'>
              
              <div className='flex gap-4'>
                <p className='translate-y-2 w-4 h-4 rounded-full bg-[#16ff1d] grid place-content-center'>
                  <BsCheck className='text-white text-lg' />
                </p>
                <p className='text-justify leading-1 indent-0'>
                  The Standard License grants you a non-exclusive right to navigate and register for our event
                </p>
              </div>
              
              <div className='flex gap-4'>
                <p className='translate-y-2 w-4 h-4 rounded-full bg-[#16ff1d] grid place-content-center'>
                  <BsCheck className='text-white text-lg' />
                </p>
                <p className='text-justify leading-1 indent-0'>
                  The Standard License grants you a non-exclusive right to navigate and register for our event
                </p>
              </div>

              <button className='self-center bg-gradient-to-r to-indigo-500 from-pink-500 rounded-sm text-xs p-2 px-5 w-fit hover:opacity-90 transition-all'>
                Read More
              </button>

            </div>

          </div>

        </div>
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute -left-8 bottom-48 rotate-12 object-cover w-4 self-center' />
      </div>

      <figure className='relative w-80 lg:64 md:w-60 md:flex-none'>
        
        <img src={BigLock} alt="big lock" loading='lazy' className='object-cover w-full self-center' />
        
        <figure className='w-80 md:w-72 md:flex-none'>
          <img src={PersonLock} alt="big lock" loading='lazy' className='absolute top-20 object-cover w-full self-center' />
        </figure>

        <img src={Star} alt="star" className='absolute bottom-52 -left-14 object-cover w-4' loading='lazy' />

        <img src={StarGray} alt="star" className='absolute -bottom-4 -right-4 object-cover w-2' loading='lazy' />
        <img src={StarWhite} alt="star" className='absolute bottom-48 right-12 object-cover w-2' loading='lazy' />
        <img src={StarWhite} alt="star" className='absolute -bottom-8 left-2 object-cover w-2' loading='lazy' />
        
      </figure>

      
    </section>
  )
}
