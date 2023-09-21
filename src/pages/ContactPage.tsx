import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import { axiosFetch } from '../api/baseUrl'
import { toast } from 'react-hot-toast'
import { ErrorStyle, SuccessStyle, emailRegex, phoneRegex, validEntry } from '../utils/toastStyles'
import { FieldInput } from '../components/register/FieldInput'
import { BiCommentError, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { BsCheck } from 'react-icons/bs'

type ContactPageProp = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initContactEntry = { phone_number: '', email: '', first_name: '', message: '' }
const fetchState = { error: false, isLoading: false }
export default function ContactPage({ setOpenModal }: ContactPageProp) {
  const [contactEntry, setContactEntry] = useState<typeof initContactEntry>(initContactEntry)
  const [appState, setAppState] = useState<typeof fetchState>(fetchState)
  const [isValidEntry, setIsValidEntry] = useState<typeof validEntry>(validEntry)
  const navigate = useNavigate()

  const { isLoading } = appState
  const { phone_number, email, first_name, message } = contactEntry

  const { isValidPhoneNumber, isValidEmail } = isValidEntry

  useEffect(() => {
    let isMounted = true
    if(isMounted && email) setIsValidEntry(prev => ({...prev, isValidEmail: emailRegex.test(email)}))
    
    return () => {
      isMounted = false
    }
  }, [email])
  
  useEffect(() => {
    let isMounted = true
    if(isMounted && phone_number) setIsValidEntry(prev => ({...prev, isValidPhoneNumber: phoneRegex.test(phone_number)}))

    return () => {
      isMounted = false
    }
  }, [phone_number])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setContactEntry(prev => ({...prev, [name]: value}))
  }

  const canSubmit = [...Object.values(contactEntry)].every(Boolean)

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!canSubmit) return
    setAppState(prev => ({...prev, isLoading: true}))
    try{
      await axiosFetch.post('/hackathon/contact-form', contactEntry)
      toast.success('Message sent', SuccessStyle)
      setContactEntry(initContactEntry)
    }
    catch(error: unknown){
      setAppState(prev => ({...prev, error: true}))
      toast.error('An error occurred', ErrorStyle)
    }
    finally{
      setAppState(prev => ({...prev, isLoading: false}))
    }
  }

  return (
    <section
      onClick={() => {
        setOpenModal(false)
        setAppState(prev => ({...prev, error: false}))
      }}
      className='monstera relative flex flex-col md:flex-row-reverse md:justify-around py-5 px-16 maxmobile:px-6 items-center'
    >
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-24 top-20 object-cover w-3.5 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-24 z-10 bottom-14 object-cover w-2 self-center' />


      <form onSubmit={handleSubmit} className='monstera relative md:bg-[#150E28] flex flex-col items-center gap-6 w-full md:-mt-3 md:rounded-md md:shadow-2xl shadow-slate-950 px-8 py-3 md:min-w-[28rem] md:w-[40rem]'>

      <img src={Star} alt="star" className='absolute bottom-36 -left-4 object-cover w-4 self-center' loading='lazy' />
      
        <button 
          onClick={() => navigate(-1)}
          className='self-start hover:scale-[1.02] hover:opacity-90 active:scale-[1] transition-all active:opacity-100 md:hidden border border-t-indigo-600 border-b-pink-500 border-l-[#760865] border-r-[#760865] rounded-full grid place-content-center w-7 h-7'>
          <MdOutlineKeyboardArrowLeft />
        </button>
      
        <div className='monstera mt-8 flex flex-col w-full items-start gap-5 whitespace-pre-wrap' >
          
          <p className='flex flex-col text-[#de79f7] w-[75%]'>
            <span className='tracking-wider'>Questions or need assistance?</span>
            <span>Let us know about it</span>
          </p>

          <p className='text-xs text-gray-300 whitespace-pre-wrap'>
            Email us below to any question related to our event
          </p>

        </div>

          <img src={Star} alt="star" className='absolute right-5 top-5 object-cover w-3 self-center' loading='lazy' />

        <div className='flex flex-col gap-5 text-sm w-full py-4'>

          <div className='relative w-full'>
            <FieldInput 
              placeholder='Enter your email address' type='email'
              name='email' value={email} handleChange={handleChange}
            />
            {
              email ? (
                isValidEmail ?
                  <BsCheck className={'absolute right-1 top-3 text-green-500 text-2xl'} />
                  :
                  <BiCommentError 
                    title='Not a valid email' 
                    className={`absolute right-1 top-3 text-red-500 text-xl cursor-default`}
                  />
              ) : null
            }
          </div>
          <div className='relative w-full'>
            <FieldInput 
              placeholder="Phone Number" type='tel'
              name='phone_number' value={phone_number} handleChange={handleChange}
            />
            <span className={`absolute ${(phone_number?.length && !isValidPhoneNumber) ? 'scale-1' : 'scale-0'} transition-all rounded-md text-center text-xs text-red-500 w-full bg-[#0b0618]`}>min 10, max 13, Example: 08012345678</span>
          </div>
          <FieldInput 
            placeholder='First Name'
            name='first_name' value={first_name} handleChange={handleChange}
          />
          
          <div className='w-full gap-1'>
            <textarea
              placeholder='Message'
              value={message}
              rows={6}
              onChange={event => setContactEntry(prev => ({ ...prev, message: event.target.value }))}
              className='bg-inherit placeholder:text-gray-500 rounded-[5px] p-2 focus:outline-none w-full px-4 border border-gray-300'
            />
          </div>

        <button 
          type='submit'
          disabled={!canSubmit && !isLoading && !isValidPhoneNumber && !isValidEmail}
          className={`${(!canSubmit || isLoading || !isValidEmail || !isValidPhoneNumber ) ? 'bg-gradient-to-r to-indigo-500 from-gray-500' : 'bg-gradient-to-r to-indigo-500 from-pink-500'} ${isLoading ? 'animate-pulse' : 'animate-none'} rounded-[5px] text-xs self-center p-3 px-14 w-fit hover:opacity-90 transition-all`}>
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
