import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Designers from '../assets/designer.svg'
import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import StarWhite from '/images/starWhite.png'
import { axiosFetch } from '../api/baseUrl'
import toast from 'react-hot-toast/headless'
import { ErrorStyle } from '../utils/toastStyles'
import Confirmation from '../components/Confirmation'
import Form from '../components/register/Form'

type RegisterProp = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initEntry = { team_name: '', phone_number: '', email: '', project_topic: '', group_size: 0, category: 1, privacy_poclicy_accepted: false }
const fetchState = { error: '', isLoading: false }
export default function Register({ setOpenModal }: RegisterProp) {
  const [reveal, setReveal] = useState<boolean>(false)
  const [userEntry, setUserEntry] = useState<typeof initEntry>(initEntry)
  const [categories, setCategories] = useState<{[index: string]: string}[]>([])
  const [appState, setAppState] = useState<typeof fetchState>(fetchState)
  const [fetchCats, setFetchCats] = useState<typeof fetchState>(fetchState)
  const [getCats, setGetCats] = useState<'YES' | 'NO'>('NO')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setUserEntry(prev => ({...prev, [name]: value}))
  }
console.log(userEntry)
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
      .catch(error => {
        const errorMsg = error?.response?.message
        console.log(error?.response)
        setFetchCats(prev => ({...prev, error: errorMsg}))
        setFetchCats(prev => ({...prev, isLoading: false}))
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
      const res = await axiosFetch.post('/hackathon/registration', userEntry)
      console.log(res?.data)
      setUserEntry(initEntry)
      setReveal(true)
      setGetCats('NO')
    }
    catch(error: unknown){
      const errorMsg = error?.response?.message
      console.log(error?.response)
      setAppState(prev => ({...prev, error: errorMsg}))
      setGetCats('NO')
      toast.error(errorMsg, ErrorStyle)
    }
    finally{
      setAppState(prev => ({...prev, isLoading: false}))
      setGetCats('NO')
    }
  }

  return (
    <section
      onClick={() => setOpenModal(false)}
      className='monstera relative flex flex-col w-full md:flex-row md:justify-around py-10 p-10 items-center gap-4'
    >
      <h1 className='text-[#de79f7] font-bold self-start md:hidden'>Register</h1>
       <img src={Star} alt="star" className='absolute top-4 object-cover w-2.5 self-center' loading='lazy' />

      <figure className='w-48 md:w-[21rem] md:h-[25rem] md:flex-none'>
        <img src={Designers} alt="big idea" loading='lazy' className='object-cover w-full self-center h-full' />
      </figure>
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-62 top-52 object-cover w-2 self-center' />

      <img src={StarWhite} alt="star" loading='lazy' className='absolute right-16 bottom-24 object-cover w-2 self-center' />

      <Form 
        categories={categories} canSubmit={canSubmit}
        setUserEntry={setUserEntry} setGetCats={setGetCats} 
        handleSubmit={handleSubmit} handleChange={handleChange} 
        userEntry={userEntry} appState={appState} fetchCats={fetchCats}
      />

      <Confirmation 
        reveal={reveal} setReveal={setReveal} setOpenModal={setOpenModal} 
      />
      
    </section>
  )
}
