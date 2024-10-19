import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


import WebApp from '@twa-dev/sdk'

const manifestUrl =
  "https://alefmanvladimir.github.io/my-twa/tonconnect-manifest.json";

WebApp.ready();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
    
      <App />
    
    </TonConnectUIProvider>
    </Provider>
  </StrictMode>,
)
