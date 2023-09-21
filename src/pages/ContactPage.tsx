import { ChangeEvent, FormEvent, useState } from 'react'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import { axiosFetch } from '../api/baseUrl'
import toast from 'react-hot-toast/headless'
import { ErrorStyle, SuccessStyle } from '../utils/toastStyles'
import LoadingSpinner from '../components/LoadingSpinner'
import { FieldInput } from '../components/register/FieldInput'
import { BiLogoFacebook, BiLogoLinkedin, BiPhoneCall } from 'react-icons/bi'
import { MdLocationOn, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

type ContactPageProp = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initContactEntry = { team_name: '', email: '', project_topic: '', message: '' }
const fetchState = { error: '', isLoading: false }
export default function ContactPage({ setOpenModal }: ContactPageProp) {
  const [contactEntry, setContactEntry] = useState<typeof initContactEntry>(initContactEntry)
  const [appState, setAppState] = useState<typeof fetchState>(fetchState)

  const { isLoading, error } = appState
  const { team_name, email, project_topic, message } = contactEntry

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setContactEntry(prev => ({...prev, [name]: value}))
  }

console.log(contactEntry)
  const canSubmit = [...Object.values(contactEntry)].every(Boolean)

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!canSubmit) return
    setAppState(prev => ({...prev, isLoading: true}))
    try{
      const res = await axiosFetch.post('/hackathon/contact-form', contactEntry)
      console.log(res?.data)
      setContactEntry(initContactEntry)
      toast.success('successful', SuccessStyle)
    }
    catch(error: unknown){
      const errorMsg = error?.response?.message
      console.log(error?.response)
      setAppState(prev => ({...prev, error: errorMsg}))
      toast.error(errorMsg, ErrorStyle)
    }
    finally{
      setAppState(prev => ({...prev, isLoading: false}))
    }
  }

  return (
    <section
      onClick={() => setOpenModal(false)}
      className='monstera relative flex flex-col md:flex-row-reverse py-5 px-16 items-center'
    >
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-24 top-20 object-cover w-3.5 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-24 z-10 bottom-14 object-cover w-2 self-center' />


      <form onSubmit={handleSubmit} className='monstera relative md:bg-[#150E28] flex flex-col items-center gap-5 w-full md:rounded-md md:shadow-2xl shadow-slate-950 px-8 py-3 md:w-[60%]'>

      <img src={Star} alt="star" className='absolute bottom-36 -left-4 object-cover w-4 self-center' loading='lazy' />
      
        <button className='self-start md:hidden border border-t-indigo-600 border-b-pink-500 border-l-[#760865] border-r-[#760865] rounded-full grid place-content-center w-7 h-7'>
          <MdOutlineKeyboardArrowLeft />
        </button>
      
        <div className='monstera flex flex-col w-full items-start gap-4 whitespace-pre-wrap' >
          
          <p className='flex flex-col text-[#de79f7] w-[75%]'>
            <span className='tracking-widest'>Questions or need assistance?</span>
            <span>Let us know about it</span>
          </p>

          <p className='text-xs text-gray-300 whitespace-nowrap'>
            Email us below to any question related to our event
          </p>

        </div>

          <img src={Star} alt="star" className='absolute right-5 top-5 object-cover w-3 self-center' loading='lazy' />

        <div className='flex flex-col gap-4 text-sm w-full py-4'>

          <FieldInput 
            placeholder="Team's Name"
            name='team_name' value={team_name} handleChange={handleChange}
          />
          <FieldInput 
            placeholder='Topic' type='tel'
            name='project_topic' value={project_topic} handleChange={handleChange}
          />
          <FieldInput 
            placeholder='Enter your email address' type='email'
            name='email' value={email} handleChange={handleChange}
          />
          
          <div className='w-full gap-1'>
            <textarea
              placeholder='Message'
              value={message}
              rows={5}
              onChange={event => setContactEntry(prev => ({ ...prev, message: event.target.value }))}
              className='bg-inherit placeholder:text-gray-100 rounded-[4px] p-2 focus:outline-none w-full px-4 border border-gray-400'
            />
          </div>

        <button 
          type='submit'
          disabled={!canSubmit && !isLoading}
          className={`${(!canSubmit || isLoading ) ? 'bg-gradient-to-r to-indigo-500 from-gray-500' : 'bg-gradient-to-r to-indigo-500 from-pink-500'} rounded-[5px] text-xs self-center p-3 px-14 w-fit hover:opacity-90 transition-all`}>
            {isLoading ? 'In Progress...' : 'Submit'}
        </button>

        </div>

      </form>

      <div className='flex flex-col items-start gap-4'>

        <div className='monstera w-[60%] hidden md:flex text-gray-300 flex-col gap-3 text-[12px]'>
          <h3 className='text-[#be22e6] font-bold text-lg'>Get in touch</h3>

          <p>Contact Information</p>
         
          <p className='flex gap-2 text-[13px] font-normal'>
            <span className='text-xs'>27,Alara Street Yaba 100012 Lagos State</span>
          </p>
          
          <p className='tracking-wider'>Call Us: <a href="tel+07067981819" className='cursor-pointer'></a>07067981819</p>
        
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>

        </div>

        <div className='flex flex-col items-center md:items-start gap-1 md:gap-2'>

          <p className='text-[#be22e6] whitespace-nowrap text-[13px]'>Share on</p>

          <div className='flex items-center gap-2 text-lg'>
            <a href={'https://'} target='_blank'>
              <AiOutlineInstagram className='cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            </a>
            <a href={'https://twitter.com/getLinkedai'} target='_blank'>
              <RiTwitterXFill className='cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            </a>
            <a href={'https://'} target='_blank'>
              <BiLogoFacebook className='text-xl cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            </a>
            <a href={'https://linkedin.com/company/getlinked-ai'} target='_blank'>
              <BiLogoLinkedin className='text-xl cursor-pointer hover:opacity-90 hover:scale-[1.023] active:opacity-100 active:scale-[1] transition-all' />
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}
