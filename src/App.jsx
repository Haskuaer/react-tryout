import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@components/Home'
import Calculator from '@components/calculator/Calculator'
import MainMenu from '@components/MainMenu'
import Stoper from '@components/stoper/Stoper'
import Board from '@components/tic_tac_toe/Board'

function App() {

  return (
    <>
      <div className="app">
        <MainMenu />
        <div className="content">          
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/stoper" element={<Stoper />} />
                  <Route path="/tic-tac-toe" element={<Board />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App