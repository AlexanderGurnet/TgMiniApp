import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import App from './App.jsx'
import './index.css'

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://alexandergurnet.github.io/TgMiniApp/tonconnect-manifest.json"
      actionsConfiguration={{
        returnStrategy: 'back',
      }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
)
