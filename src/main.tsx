import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { GetLinkedContextProvider } from './context/GetLinkedContext.tsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GetLinkedContextProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </GetLinkedContextProvider>
  </React.StrictMode>,
)
