import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './App.jsx'
import theme from './theme.js'
import './css/style.css'

// GitHub Pages 배포 경로(/home-ott/)를 basename으로 지정해 라우팅이 어긋나지 않도록 한다.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/home-ott">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
