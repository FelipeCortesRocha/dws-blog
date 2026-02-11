import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/home/index.tsx'
import Header from './components/header/index.tsx'
import { AppContainer } from './styles.ts'
import { Provider } from 'react-redux'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppContainer>
        <Header />
        <App />
      </AppContainer>
    </Provider>
  </StrictMode>,
)
