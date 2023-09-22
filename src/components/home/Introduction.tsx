import Star from '/images/star.png'
import Arrow from '/images/arrow.png'
import BigIdea from '/images/bigIdea.png'
import useObserver from '../../hooks/useObserver'

export default function Introduction() {
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px', threshold: 0.3})

  return (
    <section
      ref={observerRef as React.LegacyRef<HTMLParagraphElement>}
      className='relative flex flex-col md:flex-row md:px-16 px-10 p-4 pb-12 items-center gap-6 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <figure 
        className='relative w-80 md:w-72 md:flex-none self-center'>
        <img src={BigIdea} alt="big idea" loading='lazy' className='object-cover w-full self-center' />
        <p className={`monstera ${(isIntersecting === 'STOP') ? 'scale-[6] maxscreen:text-fuchsia-700 maxscreen:shadow-xl' : 'scale-[1]'} duration-300 absolute flex flex-col text-sm md:top-[40%] top-1/2 right-[42%] md:right-[40%] text-center z-20 font-bold`}>
          <span>The Big</span>
          <span>Idea!</span>
        </p>
        
      </figure>
      
      <img src={Arrow} alt="big idea" loading='lazy' className='md:absolute object-cover w-6 self-center md:bottom-10 md:left-[22rem]' />
      
      <img src={Star} alt="big idea" loading='lazy' className='absolute left-24 top-32 object-cover w-2 self-center' />
      
      <div className='flex flex-col gap-4'>

        <div className='monstera relative flex flex-col font-extrabold items-center' >
          
          <h3 className='font-bold'>Introduction to getlinked</h3>
          <h3 className='text-[#D434FE]'>tech Hackathon 1.0</h3>
          
          <img src={Star} alt="big idea" loading='lazy' className='absolute right-3 top-4 object-cover w-2 self-center' />
        </div>

        <div className='flex flex-col px-10 mobile:px-4'>
          <p className='px-4 mobile:px-3 md:px-0 whitespace-pre-wrap text-justify text-sm leading-loose indent-5 md:indent-0'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a 
            concept wizard, you'll have the chance to 
            transform your ideas into reality. 
          </p>
          <p className='whitespace-pre-wrap text-justify text-sm leading-loose'>
            Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
          </p>
        </div>

      </div>

    </section>
  )
}

