import Star from '/images/star.png'
import StarWhite from '/images/starWhite.png'
import LibertyCompanyColour from '/images/libertyCompanyColour.png'
import LibertyCompanyWhite from '/images/libertyCompanyWhite.png'
import WisperLogo from '/images/wisperLogo.png'
import Paybox from '/images/paybox.png'
import WinwiseCrown from '/images/winwiseCrown.png'
import VuzualPlus from '/images/vuzualPlus.png'

export default function PartnersAndSponsors() {

  return (
    <section
      id='prizes'
      className='relative flex flex-col px-20 py-14 items-center gap-12 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <img src={Star} alt="star" className='absolute top-20 right-40 object-cover w-2 self-center' loading='lazy' />

      <img src={Star} alt="star" className='absolute top-10 left-20 object-cover w-2 self-center' loading='lazy' />
      
      <div className='monstera relative flex flex-col font-extrabold items-center' >
        
        <h3 className='font-bold tracking-wide pb-2'>Partners and Sponsors</h3>
  
        <p className='text-[13px] text-gray-400 text-center indent-3 leading-5 font-normal md:w-[58%]'>
        Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
        </p>
      </div>

      <div className='monstera relative flex flex-col py-4 border rounded-md w-[333px] md:w-[45%] md:h-[180px] h-[148px] border-[#be22e6]'>

        <div className='flex items-center justify-between w-full h-1/2 px-12'>
          <Logos image={LibertyCompanyColour} option='a' />
          <p className='w-0.5 h-7 md:h-8 bg-[#ce2af7]' />
          <Logos image={LibertyCompanyWhite} />
          <p className='w-0.5 h-7 md:h-8 bg-[#ce2af7]' />
          <Logos image={WinwiseCrown} option='a' />
        </div>
       
        <div className='flex w-[80%] items-center self-center gap-3.5'>
          <p className='w-1/3 h-0.5 md:w-full bg-[#be22e6]' />
          <p className='w-1/3 h-0.5 md:w-full bg-[#be22e6]' />
          <p className='w-1/3 md:w-full h-0.5 bg-[#be22e6]' />
       </div>

        <div className='flex items-center justify-between w-full h-1/2 px-12'>
          <Logos image={WisperLogo} option='b' />
          <p className='w-0.5 h-7 md:h-8 bg-[#ce2af7]' />
          <Logos image={Paybox} option='c' />
          <p className='w-0.5 h-7 md:h-8 bg-[#ce2af7]' />
          <Logos image={VuzualPlus} option='d' />
        </div>
      
      </div>

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-36 bottom-16 rotate-12 object-cover w-2 self-center' />
      
    </section>
  )
}

type CardProps = {
  image: string,
  option?: 'a' | 'b' | 'c' | 'd'
}

//w-7 h-4
const Logos = ({ image, option }: CardProps) => {

  return (
    <figure className={`${option === 'a' ? 'md:ml-3 md:mr-4 w-10 px-0.5' : option === 'b' ? 'w-10 md:ml-6' : option === 'c' ? 'w-8' : option === 'd' ? 'md:mr-' : 'w-9'}`}>
      <img src={image} alt={image} className='objec-cover w-full h-full' />
    </figure>
  )
}
