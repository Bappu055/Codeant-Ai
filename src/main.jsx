
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Box } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <Box height='100vh' width='100vw'>
    <App />
  </Box>,
)
