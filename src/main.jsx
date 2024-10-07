import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  // <ToastContainer>
  <BrowserRouter>
  <Provider store={store} stabilityCheck='never'>
    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>
  // </ToastContainer>
)
