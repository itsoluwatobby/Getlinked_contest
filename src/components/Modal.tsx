import { TiTimes } from 'react-icons/ti'
import useGetLinkedContext from '../hooks/useGetLinkedContext'
import Navbuttons from './Navbuttons'

export default function Modal() {  
  const { openModal, setOpenModal } = useGetLinkedContext() as GetLinkedContextType

  return (
    <aside className={`fixed right-0 ${openModal ? 'flex md:hidden' : 'hidden'} flex-col gap-6 p-8 z-50 bg-[#150E28] min:w-[45%] pb-16 shadow-md rounded-md`}>
      <button 
        onClick={() => setOpenModal(false)}
        className='border self-end hover:opacity-80 hover:scale-[1.02] active:opacity-100 active:scale-[1] transition-all rounded-full border-gradient-to-r to-indigo-500 from-pink-500 w-5 grid place-content-center h-5'>
        <TiTimes className='text-xl' />
      </button>

      <Navbuttons />

    </aside>
  )
}