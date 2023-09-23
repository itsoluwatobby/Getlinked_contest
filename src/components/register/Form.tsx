import { ChangeEvent, FormEvent, useEffect, useCallback, useState } from 'react'
import LoadingSpinner from "../LoadingSpinner"
import Person1 from '/images/person1.png'
import Person2 from '/images/person2.png'
import Star from '/images/star.png'
import { FieldInput } from './FieldInput'
import { emailRegex, phoneRegex, validEntry } from '../../utils/toastStyles'
import { BiCommentError } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'

const initEntry = { team_name: '', phone_number: '', email: '', project_topic: '', group_size: 0, category: 1, privacy_poclicy_accepted: false }
const fetchState = { error: false, isLoading: false }

type FormProps = {
  userEntry: typeof initEntry,
  appState: typeof fetchState,
  fetchCats: typeof fetchState,
  categories: {[index: string]: string}[],
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  setGetCats: React.Dispatch<React.SetStateAction<"YES" | "NO">>,
  setUserEntry: React.Dispatch<React.SetStateAction<typeof initEntry>>,
  setAppState: React.Dispatch<React.SetStateAction<typeof fetchState>>,
  setFetchCats: React.Dispatch<React.SetStateAction<typeof fetchState>>,
}

const initMovement = { move1: '', move2: '' }
export default function Form({ userEntry, appState, fetchCats, categories, handleChange, handleSubmit, setUserEntry, setGetCats, setAppState, setFetchCats }: FormProps) {
  const [isValidEntry, setIsValidEntry] = useState<typeof validEntry>(validEntry)
  const [movement, setMovement] = useState<typeof initMovement>(initMovement)

  const Movements = useCallback(() => {
    return ['-translate-x-2', '-translate-x-1', 'translate-x-1', 'translate-x-2']
  }, [])

  const { isLoading, error } = appState
  const { isValidPhoneNumber, isValidEmail } = isValidEntry
  const { team_name, phone_number, email, project_topic, privacy_poclicy_accepted } = userEntry

  const canSubmit = [...Object.values(userEntry), isValidEmail, isValidPhoneNumber].every(Boolean)

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

  useEffect(() => {
    const movementLength = Movements()?.length - 1
    let index1 = 0, index2 = 0;
    let timeoutId: NodeJS.Timeout = setTimeout(()=>{})
    let prevIndex1 = 0, prevIndex2 = 0;
    if(appState?.isLoading){
      timeoutId = setInterval(() => {
        const rand = Math.floor(Math.random() + 2)
        index1 = Math.floor((movementLength * Math.random()) + rand)
        index2 = Math.floor((movementLength * Math.random()) + rand)
        if(index1 > movementLength) index1 = index1 - movementLength
        if(index2 > movementLength) index2 = index2 - movementLength
        if(prevIndex1 === index1) {
          if(prevIndex1 === movementLength) index1 = index1 - 1
          else index1 = index1 + 1
        }
        if(prevIndex2 === index2) {
          if(prevIndex2 === movementLength) index2 = index2 - 1
          else index2 = index2 + 1
        }
        if(index1 === index2) {
          if(index1 === movementLength) index1 = index1 - 1
          if(index1 > 0) index1 = index1 - 1
          else index1 = index1 + 1
        }
        setMovement(prev => ({ ...prev, move1: Movements()[index1], move2: Movements()[index2] }))
        prevIndex1 = index1 // set this last
        prevIndex2 = index2 // set this last
      }, 3000)
    }
    else clearInterval(timeoutId)

    return () => {
      clearInterval(timeoutId)
    }
  }, [Movements, appState?.isLoading])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout = setTimeout(()=>{})
    if(error) {
      timeoutId = setTimeout(() => {
        setAppState(prev => ({...prev, error: false}))
      }, 6000);
    }
    else if(fetchCats?.error) {
      timeoutId = setTimeout(() => {
        setFetchCats(prev => ({...prev, error: false}))
        setGetCats('NO')
      }, 6000);
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [error, fetchCats?.error, setFetchCats, setGetCats, setAppState])

  return (
    <form onSubmit={handleSubmit} className='monstera md:bg-[#150E28] -translate-y-2 mobile:px-16 px-8 md:py-8 flex flex-col items-center gap-2 md:rounded-md md:shadow-2xl shadow-slate-950 min-w-[27rem] md:w-[40rem]'>

    <h1 className='text-[#de79f7] hidden md:block text-xl font-bold self-start pb-3'>Register</h1>
    
      <div className='monstera flex items-center gap-2' >
        <p className='text-xs text-gray-300 whitespace-nowrap'>Be part of this movement</p>

        <div className='w-20 pr-4 grid place-content-center -translate-y-2 border border-dotted border-t-0 border-l-0 border-r-0 border-purple-700'>
          <figure className='flex items-center w-6'>
            <img src={Person1} alt="Person icon" loading='lazy' className={`object-cover w-full self-center ${appState?.isLoading ? movement?.move1 : ''} transition-all`} />
            <img src={Person2} alt="Person icon" loading='lazy' className={`object-cover w-full self-center ${appState?.isLoading ? movement?.move2 : ''} transition-all`} />
          </figure>
        </div>
      </div>

      <p className='tracking-widest'>CREATE YOUR ACCOUNT</p>

        <img src={Star} alt="star" className='absolute right-10 z-30 top-14 object-cover w-2 self-center' loading='lazy' />

      <div className='flex flex-col gap-4 text-sm w-full py-4'>

        <div className='flex md:flex-row flex-col w-full gap-4'>
          <FieldInput 
            title='Team&apos;s Name' placeholder='Enter the name of your group'
            name='team_name' value={team_name} handleChange={handleChange}
          />
          <div className='relative w-full'>
            <FieldInput 
              title='Phone' placeholder='Enter your phone number' type='tel'
              name='phone_number' value={phone_number} handleChange={handleChange}
            />
            <span className={`absolute rounded-md ${(phone_number?.length && !isValidPhoneNumber) ? 'scale-1' : 'scale-0'} transition-all rounded-md text-center text-[11px] text-red-500 w-full bg-[#0b0618]`}>min 10, max 13, Example: 08012345678</span>
          </div>
        </div>

        <div className='flex md:flex-row flex-col w-full gap-4'>
          <div className='relative w-full'>
            <FieldInput 
              title='Email' placeholder='Enter your email address' type='email'
              name='email' value={email} handleChange={handleChange}
            />
            {
              email ? (
                isValidEmail ?
                  <BsCheck className={'absolute right-0 top-8 text-green-500 text-2xl'} />
                  :
                  <BiCommentError 
                    title='Not a valid email' 
                    className={`absolute right-0.5 top-8 text-red-500 text-xl cursor-default`}
                  />
              ) : null
            }
          </div>
          <FieldInput 
            title='Project Topic' placeholder='what is your group project topic'
            name='project_topic' value={project_topic} handleChange={handleChange}
          />
        </div>
       
        <div className='relative flex items-center gap-2 w-full md:gap-4'>

          <div className='flex-auto flex flex-col w-full gap-0.5'>
            <label htmlFor='cat' className='text-[12px]'>Category</label>
            <select
              id='cat'
              className={`flex-auto bg-inherit cursor-pointer transition-all ${fetchCats?.error ? 'text-red-500' : 'text-gray-200'} rounded-[4px] p-2.5 focus:outline-none w-full px-2 border border-gray-400`}
              onClick={() => {
                setGetCats('YES')
                setFetchCats(prev => ({...prev, error: false}))
              }}
              onChange={event => setUserEntry(prev => ({ ...prev, category: +event.target.value }))}
            >
              <option value="" className={`text-gray-200 text-center bg-[#150E28]`}>{fetchCats?.error ? 'Failed:::Please Refresh' : 'Select your category'}</option>
              {
                categories?.map(cat => (
                  <option 
                    key={cat?.id} value={cat?.id}
                    className='text-white text-center bg-[#150E28]'
                  >{cat?.name}</option>
                ))
              }
            </select>
          </div>

          <LoadingSpinner isLoading={fetchCats?.isLoading} />
          
          <div className='md:flex-auto flex-none flex flex-col w-1/4 md:w-full gap-0.5'>
            <label htmlFor='group' className='text-[12px]'>Group Size</label>
            <select
              id='group'
              className='flex-none bg-inherit cursor-pointer placeholder:text-gray-600 rounded-[4px] p-2.5 focus:outline-none w-full px-2 border border-gray-400'
              onChange={event => setUserEntry(prev => ({ ...prev, group_size: +event.target.value }))}
            >
              <option value="" className='text-gray-200 text-center bg-[#150E28]'>Select</option>
              {
                [...Array(10).keys()]?.map(num => (
                  <option 
                    key={num} value={num + 1}
                    className='text-white text-center bg-[#150E28]'
                  >{num + 1}</option>
                ))
              }
            </select>
          </div>
        </div>

      </div>

      <p className='text-[12px] text-pink-600 text-center tracking-wide'>Please review your registration details before submitting</p>

      <div className='flex gap-3'>
        <input 
          type="checkbox" 
          id='privacy_poclicy'
          checked={privacy_poclicy_accepted} onChange={event => setUserEntry(prev => ({ ...prev, privacy_poclicy_accepted: event.target.checked }))} 
          className='w-4 h-4 focus:outline-none cursor-pointer'
        />
        <label htmlFor='privacy_poclicy' className='text-[12px] cursor-default'>I agreed with the event terms and conditions and privacy policy</label>
      </div>

      <button 
        type='submit'
        disabled={!canSubmit && !isLoading}
        className={`${(!canSubmit || isLoading) ? 'bg-gradient-to-r to-indigo-700 from-gray-500' : 'bg-gradient-to-r to-indigo-500 from-pink-500'} ${isLoading ? 'animate-pulse' : 'animate-none'} rounded-[5px] text-xs self-center p-3.5 px-16 w-fit md:w-full hover:opacity-90 transition-all`}>
          {isLoading ? 'In Progress...' : 'Submit'}
      </button>

    </form>
  )
}
