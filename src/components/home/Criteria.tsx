import useObserver from '../../hooks/useObserver'
import Criterias from '/images/criteria.png'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'

export default function Criteria() { 
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px', threshold: 0.35})
  const { isIntersecting: isIntersecting1, observerRef: observerRef1 } = useObserver({screenPosition: '0px', threshold: 0.35})
  const { isIntersecting: isIntersecting2, observerRef: observerRef2 } = useObserver({screenPosition: '0px', threshold: 0.35})
  const { isIntersecting: isIntersecting3, observerRef: observerRef3 } = useObserver({screenPosition: '0px', threshold: 0.35})
  const { isIntersecting: isIntersecting4, observerRef: observerRef4 } = useObserver({screenPosition: '0px', threshold: 0.35})

  return (
    <section
      id='criteria'
      className='relative flex flex-col md:flex-row py-14 lg:px-14 lg:gap-6 items-center gap-4 md:pl-10 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
       <img src={Star} alt="star" className='absolute top-4 object-cover w-2.5 self-center' loading='lazy' />

      <figure className='w-80 md:w-72 md:flex-none'>
        <img src={Criterias} alt="big idea" loading='eager' className='object-cover w-full self-center' />
      </figure>
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-62 top-52 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-16 bottom-24 object-cover w-2 self-center' />
      

      <div className='monstera flex flex-col md:items-start px-16 maxmobile:px-12 md:px-10 gap-4 transition-all'>
      
        <div className='monstera relative flex flex-col font-extrabold items-center md:items-start w-full' >
          
          <h3 className='font-bold tracking-wide'>Judging Criteria</h3>
          <h3 className='text-[#D434FE] tracking-wide'>Key attributes</h3>
          
          <img src={Star} alt="star" className='absolute right-10 top-14 object-cover w-2 self-center' loading='lazy' />
        </div>

        <p 
          ref={observerRef as React.LegacyRef<HTMLParagraphElement>}
          className={`whitespace-pre-wrap ${isIntersecting === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all indent-5 md:indent-0 text-sm leading-loose`}>
          <span className='text-pink-600 font-bold'>Innovation and Creativity:</span>&nbsp; <span className='text-gray-400 md:text-xs'>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
          </span>
        </p>
        <p 
          ref={observerRef1 as React.LegacyRef<HTMLParagraphElement>}
          className={`whitespace-pre-wrap ${isIntersecting1 === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all indent-5 md:indent-0 text-sm leading-loose`}>
          <span className='text-pink-600 font-bold'>Functionality:</span>&nbsp; <span className='text-gray-200 md:text-xs'>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
          </span>
        </p>
        <p 
          ref={observerRef2 as React.LegacyRef<HTMLParagraphElement>}
          className={`whitespace-pre-wrap ${isIntersecting2 === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all indent-5 md:indent-0 text-sm leading-loose`}>
          <span className='text-pink-600 font-bold'>Impact and Relevance:</span>&nbsp; <span className='text-gray-200 md:text-xs'>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
          </span>
        </p>
        <p 
          ref={observerRef3 as React.LegacyRef<HTMLParagraphElement>}
          className={`whitespace-pre-wrap ${isIntersecting3 === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all indent-5 md:indent-0 text-sm leading-loose`}>
          <span className='text-pink-600 font-bold'>Technical Complexity:</span>&nbsp; <span className='text-gray-200 md:text-xs'>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
          </span>
        </p>
        <p 
          ref={observerRef4 as React.LegacyRef<HTMLParagraphElement>}
          className={`whitespace-pre-wrap ${isIntersecting4 === 'SWITCH' ? 'scale-[1]' : 'scale-0'} transition-all indent-5 md:indent-0 text-sm leading-loose`}>
          <span className='text-pink-600 font-bold'>Adherence to Hackathon Rules:</span>&nbsp; <span className='text-gray-200 md:text-xs'>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
          </span>
        </p>

        <button className='bg-gradient-to-r to-indigo-500 from-pink-500 md:self-start rounded-md text-xs self-center p-3 px-10 w-fit hover:opacity-90 transition-all'>
            Read More
        </button>

      </div>

    </section>
  )
}

