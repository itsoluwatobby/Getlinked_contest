import { RiTwitterXFill } from 'react-icons/ri'
import Star from '/images/star.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { BiLogoFacebook, BiLogoLinkedin, BiPhoneCall } from 'react-icons/bi'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'

export default function Contact() {
  const buttons = ['Overview', 'Timeline', 'FAQs', 'Register']
  const buttonLinks = ['#overview', '#timeline', '#faqs', '/register']

  return (
    <section
      id='contact'
      className='relative flex flex-col px-20 lg:px-28 md:justify-center py-14 md:py-5 items-center gap-12 md:gap-6'
    >
      <img src={StarGray} alt="star" className='absolute top-10 right-32 object-cover w-2 self-center' loading='lazy' />

      <img src={StarGray} alt="star" className='absolute top-72 right-48 object-cover w-3 self-center' loading='lazy' />
      
      <img src={StarWhite} alt="star" className='absolute bottom-40 right-32 object-cover w-2 self-center' loading='lazy' />

      <img src={Star} alt="star" className='absolute bottom-24 left-36 object-cover w-2 self-center' loading='lazy' />
      
      <div className='monstera relative flex flex-col md:flex-row md:justify-between items-start font-extrabold gap-6'>

        <div className='flex flex-col gap-6 md:flex-none md:w-[40%]'>

          <div className='flex flex-col'>
            <div className='flex items-center'>
              <h3 className='font-bold tracking-wide'>get</h3>
              <h3 className='font-bold tracking-wide text-[#be22e6]'>linked</h3>
            </div>

            <p className='text-gray-300 text-[13px] font-normal pb-3 md:w-[90%]'>
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
            </p>
          </div>
    
          <p className='text-[13px] flex gap-3 text-gray-200 text-center font-normal'>
            <span>Terms of Use</span>
            <span className='w-0.5 h-4 bg-[#be22e6]' />
            <span>Privacy Policy</span>
          </p>

        </div>

        <div className='flex flex-col gap-2 font-normal text-[13px]'>
          
          <p className='text-[#be22e6] text-sm'>Useful Links</p>
          {
            buttons?.map((button, index) => (
              <a href={buttonLinks[index]}
                key={button}
                className='hover:underline text-[12px] hover:underline-offset-1 transition-all'
              >
                {button}
              </a>
            ))
          }
          
          <div className='flex items-center gap-3'>
            <p className='text-[#be22e6] whitespace-nowrap'>Follow us</p>
            <AiOutlineInstagram className='text-xl cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            <RiTwitterXFill className='text-lg cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            <BiLogoFacebook className='text-2xl cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            <BiLogoLinkedin className='text-2xl cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
          </div>

        </div>

        <div className='flex flex-col gap-3 font-medium'>
          <p className='text-[#be22e6] text-sm'>Contact Us</p>
          <p className='flex items-center gap-2 text-[12px]'>
            <BiPhoneCall className='text-white text-lg' />
            <span>+234 679 81819</span>
          </p>
          <p className='flex gap-2 text-[13px] font-normal'>
            <MdLocationOn className='text-white text-lg' />
            <span className='text-gray-400 w-[45%] text-xs'>27,Alara Street Yaba 100012 Lagos State</span>
          </p>
        </div>
        
      </div>
        <p className='font-normal text-[13px] self-center'>All rights reserved. &copy; getlinked Ltd.</p>
    </section>
  )
}