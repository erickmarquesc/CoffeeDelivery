import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { defaultTheme } from './styles/theme/default'
import 'react-toastify/dist/ReactToastify.min.css'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer closeOnClick />
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

