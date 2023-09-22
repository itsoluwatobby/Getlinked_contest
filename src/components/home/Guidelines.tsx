import useObserver from '../../hooks/useObserver'
import Guideline from '/images/guideline.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'

export default function Guidelines() {
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px', threshold: 0.3})

  return (
    <section
      ref={observerRef}
      className='relative flex flex-col md:pr-20 md:flex-row-reverse p-2 pb-12 items-center gap-4 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <figure className={`${isIntersecting === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all w-80 md:w-72 md:flex-none`}>
        <img src={Guideline} alt="Guideline" loading='eager' className='object-cover w-full self-center' />
      </figure>
      
      <img src={StarWhite} alt="star" loading='lazy' className='absolute left-20 top-52 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute left-36 bottom-6 object-cover w-2 self-center' />
      
      
      <div className='flex flex-col gap-4'>

        <div className='monstera relative flex flex-col font-extrabold items-center' >
          
          <h3 className='font-bold tracking-wide'>Rules and</h3>
          <h3 className='text-[#D434FE] tracking-wide'>Guidelines</h3>
          
          <img src={StarGray} alt="star" loading='lazy' className='absolute right-10 top-14 object-cover w-2 self-center' />
        </div>

        <div className='monstera flex flex-col px-12 maxmobile:px-6'>
          <p className='px-4 whitespace-pre-wrap indent-7 md:indent-0 md:text-justify text-xs leading-loose'>
            Our tech hackathon is a melting pot of 
            visionaries, and its purpose is as clear as day:
            to shape the future. Whether you're a coding
            genius, a design maverick, or a concept 
            wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world 
            problems, pushing the boundaries of 
            technology, and creating solutions that can 
            change the world, that's what we're all about!
          </p>
        </div>

      </div>

    </section>
  )
}

