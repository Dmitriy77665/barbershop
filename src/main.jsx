import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header.jsx'
import Title from './components/main/Title.jsx'
import Content from './components/content/Content.jsx'

import './components/style/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Title />
    <Content />
  </React.StrictMode>,
)
