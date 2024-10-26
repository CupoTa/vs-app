import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import './i18n.js';

import WebApp from '@twa-dev/sdk'

const manifestUrl =
  "https://cupota.github.io/vs-app/tonconnect-manifest.json";

WebApp.ready();

// WebApp.setHeaderColor("rgba(189, 38, 38, 1)")
WebApp.setBottomBarColor("rgba(189, 38, 38, 1)")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
    
      <App />
    
    </TonConnectUIProvider>
    </Provider>
  </StrictMode>,
)
