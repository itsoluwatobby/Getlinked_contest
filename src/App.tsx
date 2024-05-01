import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage'
import Modal from './components/Modal'
import useGetLinkedContext from './hooks/useGetLinkedContext'

const App = () => {
  const { setOpenModal } = useGetLinkedContext() as GetLinkedContextType

  return (
    <main className='hidebars max-w-[1440px] mx-auto w-screen text-white h-screen overflow-y-scroll bg-gradient-to-l from-[#0e0527] from-10% to-[#150E28] flex flex-col'>
      <Navbar />
      <Modal />
      <Routes>
        <Route path='/'>

          <Route path='register' element={<Register setOpenModal={setOpenModal} />} />

          <Route path='contact' element={<ContactPage setOpenModal={setOpenModal} />} />

          <Route index element={<Home setOpenModal={setOpenModal} />} />

        </Route>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
