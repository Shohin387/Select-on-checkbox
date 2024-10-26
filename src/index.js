import React from'react'
import ReactDOMClient from 'react-dom/client'
import App from './side-bar/app'

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)