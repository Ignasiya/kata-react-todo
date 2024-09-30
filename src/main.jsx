import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskLayout from '@/layouts/TaskLayout'
import 'normalize.css'
import '@/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskLayout />
  </StrictMode>
)
