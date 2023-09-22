import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Designers from '../assets/designer.svg'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import { axiosFetch } from '../api/baseUrl'
import { toast } from 'react-hot-toast'
import { ErrorStyle } from '../utils/toastStyles'
import Confirmation from '../components/Confirmation'
import Form from '../components/register/Form'
import { useNavigate } from 'react-router-dom'

type RegisterProp = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initEntry = { team_name: '', phone_number: '', email: '', project_topic: '', group_size: 0, category: 1, privacy_poclicy_accepted: false }
const fetchState = { error: false, isLoading: false }
export default function Register({ setOpenModal }: RegisterProp) {
  const [reveal, setReveal] = useState<boolean>(false)
  const [userEntry, setUserEntry] = useState<typeof initEntry>(initEntry)
  const [categories, setCategories] = useState<{[index: string]: string}[]>([])
  const [appState, setAppState] = useState<typeof fetchState>(fetchState)
  const [fetchCats, setFetchCats] = useState<typeof fetchState>(fetchState)
  const [getCats, setGetCats] = useState<'YES' | 'NO'>('NO')
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setUserEntry(prev => ({...prev, [name]: value}))
  }

  useEffect(() => {
    let isMounted = true
    const getCategories = () => {
      setFetchCats(prev => ({...prev, isLoading: true}))
      axiosFetch(`/hackathon/categories-list`)
      .then(data => {
        setCategories(data?.data)
        setFetchCats(prev => ({...prev, isLoading: false}))
        setGetCats('NO')
      })
      .catch(() => {
        setFetchCats(prev => ({...prev, error: true, isLoading: false}))
        setGetCats('NO')
      })
    }
    if(isMounted && getCats === 'YES' && !categories?.length) getCategories()

    return () => {
      isMounted = false
    }
  }, [getCats, categories])

  const canSubmit = [...Object.values(userEntry)].every(Boolean)

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!canSubmit) return
    setAppState(prev => ({...prev, isLoading: true}))
    try{
      await axiosFetch.post('/hackathon/registration', userEntry)
      setUserEntry(initEntry)
      setReveal(true)
      setGetCats('NO')
    }
    catch(error: unknown){
      let errorMsg: string = ''
      const errors = error as ErrorResponseType
      const errorObj = errors?.response?.data
      if(errorObj && 'email' in errorObj) errorMsg = errorObj?.email[0]
      else errorMsg = errors?.message
      toast.error(errorMsg, ErrorStyle)
      setGetCats('NO')
      setAppState(prev => ({...prev, error: true}))
    }
    finally{
      setAppState(prev => ({...prev, isLoading: false}))
      setGetCats('NO')
    }
  }

  return (
    <section
      onClick={() => setOpenModal(false)}
      className='monstera relative flex flex-col w-full md:flex-row md:justify-around py-10 p-10 items-center gap-4 md:gap-2'
    >
      <h1 
        onClick={() => navigate(-1)}
        className='text-[#de79f7] font-bold self-start md:hidden cursor-default'>Register</h1>
       <img src={Star} alt="star" className='absolute top-4 object-cover w-2.5 self-center' loading='lazy' />

      <figure className='md:flex-none w-48 md:w-[18rem] md:h-[25rem]'>
        <img src={Designers} alt="big idea" loading='eager' className='object-cover w-full self-center h-full' />
      </figure>
      
      <img src={StarGray} alt="star" loading='eager' className='absolute left-62 top-52 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='eager' className='absolute right-16 bottom-24 object-cover w-2 self-center' />

      <Form 
        setUserEntry={setUserEntry} setGetCats={setGetCats} 
        handleSubmit={handleSubmit} handleChange={handleChange} 
        userEntry={userEntry} appState={appState} fetchCats={fetchCats}
        categories={categories} setAppState={setAppState} setFetchCats={setFetchCats}
      />

      <Confirmation 
        reveal={reveal} setReveal={setReveal} setOpenModal={setOpenModal} 
      />
      
    </section>
  )
}
