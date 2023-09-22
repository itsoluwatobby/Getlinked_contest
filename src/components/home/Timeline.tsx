import useObserver from '../../hooks/useObserver'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'

export default function Timeline() {
  // first 3 observers for small screens below 768px
  const { isIntersecting: isIntersecting0, observerRef: observerRef0 } = useObserver({screenPosition: '0px', threshold: 1})
  const { isIntersecting: isIntersecting1, observerRef: observerRef1 } = useObserver({screenPosition: '0px', threshold: 1})
  const { isIntersecting: isIntersecting2, observerRef: observerRef2 } = useObserver({screenPosition: '0px', threshold: 1})
  // last 3 observers for both small screens and large screens
  const { isIntersecting: isIntersecting3, observerRef: observerRef3 } = useObserver({screenPosition: '0px', threshold: 1})
  const { isIntersecting: isIntersecting4, observerRef: observerRef4 } = useObserver({screenPosition: '0px', threshold: 1})
  const { isIntersecting: isIntersecting5, observerRef: observerRef5 } = useObserver({screenPosition: '0px', threshold: 1})
  // first 3 observers for large screens above 767px
  const { isIntersecting: isIntersecting6, observerRef: observerRef6 } = useObserver({screenPosition: '0px', threshold: 0.9})
  const { isIntersecting: isIntersecting7, observerRef: observerRef7 } = useObserver({screenPosition: '0px', threshold: 0.9})
  const { isIntersecting: isIntersecting8, observerRef: observerRef8 } = useObserver({screenPosition: '0px', threshold: 0.9})

  const observerRefs = [observerRef6, observerRef7, observerRef8, observerRef3, observerRef4, observerRef5]
  const intersections = [isIntersecting6, isIntersecting7, isIntersecting8, isIntersecting3, isIntersecting4, isIntersecting5]

  return (
    <section
      id='timeline'
      className='relative flex flex-col px-20 maxmobile:px-12  py-14 items-center gap-4 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <img src={Star} alt="star" className='absolute top-36 left-24 object-cover w-3 self-center' loading='lazy' />
      
      <div className='monstera relative flex flex-col font-extrabold items-center' >
        
        <h3 className='font-bold tracking-wide'>Timeline</h3>
        
        <p className='text-[13px] text-justify indent-3 leading-loose font-normal'>
        Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </div>

      <div className='monstera relative flex flex-col md:flex-row gap-5 text-[13px] py-8'>
     
        <div className='h-full flex flex-col gap-5'>

          <TimelineCard 
            observerRef={observerRef0} isIntersecting={isIntersecting0}
            title='Hackathon Announcement' date='November 18, 2023' count={1}
            content='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
            />
        
          <TimelineCard 
            observerRef={observerRef1} isIntersecting={isIntersecting1}
            title='Teams Registration begins' date='November 18, 2023' count={2}
            content='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
            />
          
          <TimelineCard 
            observerRef={observerRef2}  isIntersecting={isIntersecting2}
            title='Teams Registration begins' date='November 18, 2023' count={3}
            content='Interested Participants are no longer Allowed to register'
            />

        </div>

        <div className='hidden md:flex flex-col items-center'>
          {
            [...Array(6).keys()]?.map(i => (
              <div 
                key={i}
                ref={observerRefs[i] as React.LegacyRef<HTMLDivElement>}
                className='hidden md:flex flex-col gap-1.5 py-0.5 items-center h-full'>
                <div className='w-0.5 h-full bg-[#c788d7]' />
                <p className={`w-5 h-7 ${intersections[i] === 'SWITCH' ? 'md:-translate-y-0' : 'md:-translate-y-20'} transition-all  rounded-full bg-gradient-to-r to-indigo-500 from-[#ce2af7] grid place-content-center text-xs`}>{i + 1}</p>
              </div>
            ))
          }
        </div>

        <div className='h-full flex flex-col gap-5'>

          <TimelineCard 
            observerRef={observerRef3} isIntersecting={isIntersecting3}
            title='Announcement of the accepted teams and ideas' date='November 18, 2023' count={4}
            content='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
            />
        
          <TimelineCard 
            observerRef={observerRef4} isIntersecting={isIntersecting4}
            title='Getlinked Hackathon 1.0 Offically Begins' date='November 18, 2023' count={5}
            content='Accepted teams can now proceed to build their ground breaking skill driven solutions'
          />
        
          <TimelineCard 
            observerRef={observerRef5} isIntersecting={isIntersecting5}
            title='Demo Day' date='November 18, 2023' count={6}
            content='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
          />

        </div>
  
      </div>
   
      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-32 bottom-96 rotate-12 object-cover w-2 self-center' />
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-6 bottom-12 object-cover w-2 self-center' />
    
    </section>
  )
}

type CardProps = {
  title: string,
  date: string,
  content: string,
  count: number,
  isIntersecting: IsIntersectingType,
  observerRef: (node: HTMLDivElement) => void
}

const TimelineCard = ({ title, date, content, count, isIntersecting, observerRef }: CardProps) => {

  return (
    <div 
      id='timeline'
      ref={observerRef}
      className={`flex items-center gap-2 ${count > 3 ? 'md:translate-y-10' : ''} text-xs align-top`}>
        
      <div className={`flex flex-col transition-all md:hidden gap-1 py-0.5 items-center h-full`}>
        <div className='w-0.5 h-full bg-[#c788d7]' />
        <p className={`w-4 h-4 ${isIntersecting === 'SWITCH' ? 'midscreen:translate-y-0' : 'midscreen:-translate-y-20'} transition-all rounded-full bg-gradient-to-r to-indigo-500 from-[#ce2af7] grid place-content-center text-xs`}>{count}</p>
      </div>

      <div className={`flex ${count > 3 ? 'md:flex-col-reverse flex-col' : 'flex-col'} gap-1 md:gap-11 whitespace-pre-wrap cursor-pointer transition-all leading-5`}>
        <div className='flex flex-col gap-1'>
          <p className='text-[#ce2af7]'>{title}</p>
          <p className='text-gray-200 w-[90%] text-[11px]'>{content}</p>
        </div>
        <p className={`text-[#ce2af7] ${count > 3 ? (isIntersecting === 'STOP' ? 'text-right' : 'text-left') : (isIntersecting === 'STOP' ? 'md:text-left text-right' : 'md:text-right text-left')} transition-all`}>{date}</p>
      </div>
    
    </div>
  )
}
