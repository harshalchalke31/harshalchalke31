import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Sidebar } from './components/Sidebar'
import FloatingMenu from './components/FloatingMenu'
import Profile from './components/Profile'
import { Copyright } from 'lucide-react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
    <hr className="mt-10 w-full border-neutral-600" />
    <p className="flex items-center justify-center text-sm text-neutral-500 mt-4 gap-2 mb-4">
      <Copyright size={14} />
      <span>2026 Harshal Chalke. Software Engineer. All rights reserved.</span>
    </p>

  </StrictMode>,
)
