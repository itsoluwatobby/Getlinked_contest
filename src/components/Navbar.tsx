import { Link, useLocation } from "react-router-dom"
import useGetLinkedContext from "../hooks/useGetLinkedContext"
import Navbuttons from "./Navbuttons"

export default function Navbar() {
  const { pathname } = useLocation()
  const { setOpenModal } = useGetLinkedContext() as GetLinkedContextType
  const excludeBorder = ['/contact', '/register']
console.log(pathname)
  return (
    <nav className={`sticky top-0 bg-gradient-to-l from-[#0e0527] from-15% to-[#150E28] z-50 w-full p-5 px-10 pt-8 flex items-center justify-between ${excludeBorder?.includes(pathname) ? 'border-none' : 'border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-700'}`}>
      <Link to='/' className='flex items-center font-bold text-lg'>
        <span>get</span>
        <span className='text-[#D434FE]'>Linked</span>
      </Link>

      <div 
        onClick={() => setOpenModal(true)}
        className='cursor-pointer md:hidden grid hover:opacity-90 transition-all box-border rounded-md h-5 place-content-center'>
        <span className='relative w-6 h-[3px] bg-white rounded-sm flex before:absolute before:-top-1.5 before:content-[""] before:bg-white before:w-3 before:h-[3px] before:rounded-sm after:absolute after:top-1.5 after:right-0 after:content-[""] after:bg-white after:w-3 after:h-[3px] after:rounded-sm'/>
      </div>

      <Navbuttons screen='MAX' />

    </nav>
  )
}