import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import Prize from '/images/prizes.png'
import Gold_medal from '/images/gold_medal.png'
import Silver_medal from '/images/silver_medal.png'
import Bronze_medal from '/images/bronze_medal.png'
import useObserver from '../../hooks/useObserver'

export default function Prizes() {
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px', threshold: 0.6})

  console.log(isIntersecting)

  return (
    <section
      id='prizes'
      className='relative flex flex-col md:flex-row md:justify-center md:gap-x-20 px-20 py-14 items-center gap-12'
    >
      <img src={Star} alt="star" className='absolute top-20 right-40 object-cover w-2 self-center' loading='lazy' />

      <img src={Star} alt="star" className='absolute top-10 left-20 md:left-48 object-cover w-2 self-center' loading='lazy' />
      
      <div className='monstera relative flex md:hidden flex-col font-extrabold items-center' >
        
        <h3 className='font-bold tracking-wide'>Prizes and</h3>
        <h3 className='text-[#D434FE] tracking-wide'>Rewards</h3>
        
        <p className='text-[13px] text-center indent-3 leading-loose font-normal'>
        Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <figure className='w-80 md:w-72 md:flex-none'>
        <img src={Prize} alt="prizes" loading='lazy' className='object-cover w-full self-center' />
      </figure>


      <div className='monstera relative flex md:hidden items-center gap-4 text-[13px] py-8'>
     
        <PrizeCard 
          image={Silver_medal} position='2nd' prizeAmount='N300,000' 
        />

        <PrizeCard 
          image={Gold_medal} position='1st' prizeAmount='N400,000' 
        />
        
        <PrizeCard 
          image={Bronze_medal} position='3rd' prizeAmount='N150,000' 
        />
      
      </div>

      <div className='hidden md:flex flex-col items-center gap-12'>

        <div className='monstera relative flex flex-col font-extrabold items-center' >
          
          <h3 className='font-bold tracking-wide'>Prizes and</h3>
          <h3 className='text-[#D434FE] tracking-wide'>Rewards</h3>
          
          <p className='text-[13px] text-center indent-3 leading-loose font-normal'>
          Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>

        <div className='monstera relative flex items-center gap-4 text-[13px] py-8'>
      
          <PrizeCard 
            image={Silver_medal} position='2nd' prizeAmount='N300,000' 
          />

          <PrizeCard 
            image={Gold_medal} position='1st' prizeAmount='N400,000' 
          />
          
          <PrizeCard 
            image={Bronze_medal} position='3rd' prizeAmount='N150,000' 
          />
        
        </div>

      </div>
   
      <img src={StarWhite} alt="star" loading='lazy' className='absolute left-32 bottom-72 rotate-12 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-24 bottom-60 rotate-12 object-cover w-2 self-center' />
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-6 md:left-52 bottom-12 object-cover w-2 self-center' />
    
    </section>
  )
}

type CardProps = {
  image: string,
  prizeAmount: string,
  position: '1st' | '2nd' | '3rd',
}

const PrizeCard = ({ prizeAmount, image, position }: CardProps) => {

  return (
    <div className={`relative flex flex-col items-center mt-2 pb-4 p-2 border ${position === '1st' ? 'border-[#5a37a7] bg-[#5a37a7] bg-opacity-10 pt-10 translate-y-1' : 'pt-8 border-[#ce2af7] bg-opacity-10 bg-[#ce2af7]'} rounded-md gap-2 w-fit text-xs align-top`}>
      <figure className={`absolute ${position === '1st' ? 'w-24 h-24 -top-14' : 'w-14 h-14 -top-6'}`}>
        <img src={image} alt={position} className='objec-cover w-full h-full' />
      </figure>
    
      <div className='flex flex-col items-center'>
        <p className=''>{position}</p>
        <p className='text-gray-200 w-[90%] text-[11px] text-center'>Runner</p>
      </div>
      <p className={`${position === '1st' ? 'text-[#5a37a7]' : 'text-[#ce2af7]'} font-bold`}>{prizeAmount}</p>
    
    </div>
  )
}
