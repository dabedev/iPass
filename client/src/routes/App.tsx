import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/global.css'
import AppContext from '../contexts/AppContext'
import Layout from '../containers/Layout'
import Home from '../pages/Home'

function App() {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
