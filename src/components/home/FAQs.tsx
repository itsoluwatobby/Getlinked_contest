import Star from '/images/star.png'
import FAQ from '/images/faqs.png'
import Question from '/images/question.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import useObserver from '../../hooks/useObserver'

export default function FAQs() {
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px', threshold: 0.35})

  return (
    <section
      id='faqs'
      ref={observerRef}
      className='relative flex flex-col md:flex-row py-14 items-center md:justify-center gap-10 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'
    >
      <img src={Star} alt="star" className='absolute top-10 left-16 object-cover w-4 self-center' loading='lazy' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-32 bottom-16 object-cover w-3 self-center' />
      
      
      <div className='monstera relative flex flex-col px-14 maxmobile:px-12 gap-10 text-[13px] py-8'>
        <div className='monstera relative flex flex-col font-extrabold items-center' >
          
          <h3 className='font-bold tracking-wide'>Frequently Asked</h3>
          <h3 className='text-[#D434FE] tracking-wide'>Questions</h3>
          
          <p className='text-[13px] text-center leading-loose font-normal'>
          We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
          </p>
        </div>

        <div className='flex flex-col gap-5'>

          <FAQComp 
            question='Can i work on a project I started before the hackathon'
          />

          <FAQComp 
            question='What happens if i need help during the hackathon'
          />

          <FAQComp 
            question="What happens if I don't have an idea for a project"
          />

          <FAQComp 
            question='Can i join a team or do i have to come with one'
          />

          <FAQComp 
            question='What happens after the hackathon ends'
          />

          <FAQComp 
            question='Can i work on a project I started before the hackathon'
          />


        </div>

      </div>
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-28 md:left-80 bottom-56 md:top-48 object-cover w-2.5 self-center' />
      <img src={Star} alt="star" loading='lazy' className='absolute left-36 bottom-72 object-cover w-2 self-center' />

      <figure className='relative w-80 md:w-80 md:flex-none'>
        
        <img src={FAQ} alt="FAQs" loading='eager' className='object-cover w-full self-center' />
        
        <>
          <img src={Question} alt="question" loading='eager' className={`absolute right-28 top-0 ${isIntersecting === 'SWITCH' ? 'animate-bounce' : 'animate-none'} transition-all object-cover w-4 self-center`} />

          <img src={Question} alt="question" loading='eager' className={`absolute left-28 -top-8 object-cover w-6 self-center ${isIntersecting === 'SWITCH' ? 'animate-bounce' : 'animate-none'} transition-all`} />

          <img src={Question} alt="question" loading='eager' className={`absolute left-8 top-2 object-cover w-4 ${isIntersecting === 'SWITCH' ? 'animate-bounce' : 'animate-none'} transition-all self-center`} />
        </>
      
      </figure>

    </section>
  )
}

type QuestionProp = {
  question: string
}
const FAQComp = ({ question }: QuestionProp) => {

  return (
    <div className='relative whitespace-pre-wrap cursor-pointer hover:border-blue-400 transition-all leading-5 border border-t-0 border-r-0 border-l-0 pb-1 border-b-1 border-purple-700'>
      <p className='text-gray-200 w-[90%]'>{question}?</p>
      <p className='absolute right-0 w-8 pt-4 text-right cursor-pointer text-lg hover:opacity-90 transition-all -bottom-1 text-purple-500'>+</p>
    </div>
  )
}
