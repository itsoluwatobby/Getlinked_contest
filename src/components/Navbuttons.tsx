import { useState } from "react"
import { Link } from "react-router-dom"

type NavbuttonsProps = {
  screen?: 'MAX'  
}

export default function Navbuttons({ screen }: NavbuttonsProps) {
  const buttons = ['Timeline', 'Overview', 'FAQs', 'Contact']
  const buttonLinks = ['#timeline', '#criteria', '#faqs', '/contact']
  const [buttonName, setButtonName] = useState<string>('')

  return (
    <div className={`${screen === 'MAX' ? 'hidden md:flex md:flex-row items-center' : 'flex flex-col pr-10 items-start'} gap-6`}>
      {
        buttons?.map((button, index) => (
          <a href={buttonLinks[index]} 
            key={button}
            onClick={() => setButtonName(button)}
            className={`w-full md:text-sm py-0.5 ${buttonName === button ? 'underline underline-offset-4' : ''} cursor-pointer hover:underline hover:underline-offset-2 hover:opacity-90 active:opacity-100 transition-all`}
          >
            {button}
          </a>
        ))
      }

      <Link to={'/register'} className='bg-gradient-to-r to-indigo-500 from-pink-500 rounded-sm text-xs p-3 px-14 md:px-7 md:p-2.5 w-fit hover:opacity-90 transition-all'>
        Register
      </Link>
    </div>
  )
}