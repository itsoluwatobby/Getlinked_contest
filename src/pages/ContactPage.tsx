import { ChangeEvent, FormEvent, useState } from 'react'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import { axiosFetch } from '../api/baseUrl'
import toast from 'react-hot-toast/headless'
import { ErrorStyle, SuccessStyle } from '../utils/toastStyles'
import LoadingSpinner from '../components/LoadingSpinner'

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
      className='monstera relative flex flex-col md:flex-row py-10 p-10 items-center gap-4'
    >
      <img src={Star} alt="star" className='absolute top-4 object-cover w-2.5 self-center' loading='lazy' />
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-62 top-52 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-16 bottom-24 object-cover w-2 self-center' />

      <form onSubmit={handleSubmit} className='monstera flex flex-col items-center px-8 gap-2'>
      
        <div className='monstera flex items-start gap-2' >
          
          <p className='flex flex-col text-[#de79f7]'>
            <span className='tracking-widest'>Questions or need assistance?</span>
            <span>Let us know about it</span>
          </p>

          <p className='text-xs text-gray-300 whitespace-nowrap'>
            Email us below to any question related to our event
          </p>

        </div>

          <img src={Star} alt="star" className='absolute right-10 top-14 object-cover w-2 self-center' loading='lazy' />

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
              className='bg-inherit placeholder:text-gray-600 rounded-[4px] p-2 focus:outline-none w-full px-4 border border-gray-300'
            />
          </div>
          <LoadingSpinner isLoading={isLoading} />

        </div>

        <button 
          type='submit'
          disabled={!canSubmit && !isLoading}
          className={`${(!canSubmit || isLoading ) ? 'bg-gradient-to-r to-indigo-500 from-gray-500' : 'bg-gradient-to-r to-indigo-500 from-pink-500'} rounded-[5px] text-xs self-center p-4 px-16 w-fit hover:opacity-90 transition-all`}>
            {isLoading ? 'In Progress...' : 'Submit'}
        </button>

      </form>

    </section>
  )
}

type FieldInputProp = {
  name: string,
  type?: 'text' | 'tel' | 'email',
  value: string,
  placeholder: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FieldInput = ({ type='text', value, placeholder, name, handleChange }: FieldInputProp) => {

  return (
    <div className='w-full gap-1'>
      <input 
        type={type} 
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className='bg-inherit placeholder:text-gray-600 rounded-[4px] p-2 focus:outline-none w-full px-4 border border-gray-300'
      />
    </div>
  )
}
