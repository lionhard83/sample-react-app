import React from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ListCharacters } from '../ListCharacters/ListCharacters'
import { SingleCharacter } from '../SingleCharacter/SingleCharacter'

export const Wrapper = () => { 
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/characters" element={<Container />}>
                <Route index></Route>
                <Route path=':id' element={<SingleCharacter></SingleCharacter>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

const Container = () => {
    return <div style={{display: 'flex'}}><ListCharacters /><Outlet /></div>
}
