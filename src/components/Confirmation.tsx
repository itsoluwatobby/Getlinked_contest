import Star from '/images/star.png'
import StarGray from '/images/starGray.png'
import Successfully_check from '/images/successfully-check.png'
import Successful_man from '/images/successful-man.png'

type ConfirmationProp = {
  reveal: boolean,
  setReveal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Confirmation({ reveal, setReveal, setOpenModal }: ConfirmationProp) {
 

  return (
    <section
      onClick={() => setOpenModal(false)}
      className={`monstera fixed ${reveal ? 'scale-100' : 'scale-0 hidden'} flex justify-center bg-[#150E28] w-full h-screen transition-all inset-0 bg-opacity-90 p-10`}
    >
      <img src={Star} alt="star" className='absolute top-4 object-cover w-2.5 self-center' loading='lazy' />
      
      <img src={StarGray} alt="star" loading='lazy' className='absolute left-62 top-52 object-cover w-2 self-center' />

      <div className='flex flex-col self-center items-center md:w-1/2 transition-all gap-6 p-7 border rounded-md border-purple-700 shadow-xl'>
        
        <figure className='w-40 flex'>
          <img src={Successfully_check} alt="successful checker" loading='eager' className='-translate-x-10 object-cover w-full' />
          <img src={Successful_man} alt="successful icon" loading='eager' className='-translate-x-[130px] translate-y-2 object-cover w-full' />
        </figure>

        <div className='flex flex-col w-[70%] bg-transparent items-center text-[15px] tracking-wide'>
          <p>
            Congratulations 
          </p>
          <p className='text-center'>
            you have successfully Registered
          </p>
        </div>

        <div className='flex flex-col text-gray-300 w-[95%] bg-transparent text-[13px]'>
          <p className='text-center'>
            Yes, it was easy and you did it! 
          </p>
          <p className='text-center'>
            check your mail box for next step🥳
          </p>
        </div>

        <button 
          onClick={() => setReveal(false)}
          className='bg-gradient-to-r from-pink-500 to-indigo-500 rounded-[5px] text-xs self-center p-4 px-16 w-full hover:opacity-90 transition-all'>
            Back
        </button>

      </div>

    </section>
  )
}