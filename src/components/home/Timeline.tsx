import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'

export default function Timeline() {

  return (
    <section
      id='timeline'
      className='relative flex flex-col px-20 py-14 items-center gap-4 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <img src={Star} alt="star" className='absolute top-36 left-24 object-cover w-3 self-center' loading='lazy' />
      
      <div className='monstera relative flex flex-col font-extrabold items-center' >
        
        <h3 className='font-bold tracking-wide'>Timeline</h3>
        
        <p className='text-[13px] text-justify indent-3 leading-loose font-normal'>
        Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </div>

      <div className='monstera relative flex flex-col gap-5 text-[13px] py-8'>
     
        <TimelineCard 
          title='Hackathon Announcement' date='November 18, 2023' count={1}
          content='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
        />
       
        <TimelineCard 
          title='Teams Registration begins' date='November 18, 2023' count={2}
          content='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
        />
        
        <TimelineCard 
          title='Teams Registration begins' date='November 18, 2023' count={3}
          content='Interested Participants are no longer Allowed to register'
        />
      
        <TimelineCard 
          title='Announcement of the accepted teams and ideas' date='November 18, 2023' count={4}
          content='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
        />
      
        <TimelineCard 
          title='Getlinked Hackathon 1.0 Offically Begins' date='November 18, 2023' count={5}
          content='Accepted teams can now proceed to build their ground breaking skill driven solutions'
        />
      
        <TimelineCard 
          title='Demo Day' date='November 18, 2023' count={6}
          content='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
        />
  
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
  count: number
}

const TimelineCard = ({ title, date, content, count }: CardProps) => {

  return (
    <div 
      id='timeline'
      className='flex items-center gap-2 text-xs align-top'>
        
      <div className='flex flex-col gap-1 py-0.5 items-center h-full'>
        <div className='w-0.5 h-full bg-[#ce2af7]' />
        <p className='w-4 h-4 rounded-full bg-gradient-to-r to-indigo-500 from-[#ce2af7] grid place-content-center text-xs'>{count}</p>
      </div>

      <div className='flex flex-col gap-1 whitespace-pre-wrap cursor-pointer transition-all leading-5'>
        <p className='text-[#ce2af7]'>{title}</p>
        <p className='text-gray-200 w-[90%] text-[11px]'>{content}</p>
        <p className='text-[#ce2af7]'>{date}</p>
      </div>
    
    </div>
  )
}
