import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

type NavbuttonsProps = {
  screen?: 'MAX',
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbuttons({ screen, setOpenModal }: NavbuttonsProps) {
  const { pathname } = useLocation()
  const buttons = ['Timeline', 'Overview', 'FAQs']
  const buttonLinks = ['#timeline', '#criteria', '#faqs']
  const [buttonName, setButtonName] = useState<string>('')

  return (
    <div className={`${screen === 'MAX' ? 'hidden md:flex md:flex-row items-center' : 'flex flex-col pr-10 items-start'} gap-8`}>
      {
        buttons?.map((button, index) => (
          <a href={buttonLinks[index]} 
            key={button}
            onClick={() => {
              setButtonName(button)
              // setOpenModal(false)
            }}
            className={`w-full md:text-sm py-0.5 ${buttonName === button ? 'text-[#b94bac]' : ''} cursor-pointer hover:underline hover:underline-offset-2 hover:opacity-90 active:opacity-100 transition-all`}
          >
            {button}
          </a>
        ))
      }

      <Link to={'/contact'}
        onClick={() => {
          setButtonName('')
          setOpenModal(false)
        }}
        className={`w-full md:text-sm py-0.5 ${pathname === '/contact' ? 'text-[#b94bac]' : ''} cursor-pointer hover:underline hover:underline-offset-2 hover:opacity-90 active:opacity-100 transition-all`}
      >
        Contact
      </Link>

      <Link to={'/register'} 
        onClick={() =>  setOpenModal(false)}
        className={`${pathname === '/register' ? 'border border-t-indigo-600 border-b-pink-500 border-l-[#760865] border-r-[#3a1153]' : 'bg-gradient-to-r to-indigo-500 from-pink-500'} rounded-[4px] text-xs p-3 px-14 md:px-7 md:p-2.5 w-fit hover:opacity-90 transition-all`}>
        Register
      </Link>
    </div>
  )
}