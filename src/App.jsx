import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import GameSet from './components/GameSet'
import Game from './components/Game'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<GameSet />} />
        <Route path='/setup' element={<GameSet />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  )
}

export default App
