import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskLayout from '@/layouts/TaskLayout'
import 'normalize.css'
import '@/styles/main.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <TaskLayout />
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
