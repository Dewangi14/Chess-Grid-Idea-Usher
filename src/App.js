import React, {useState, useEffect} from 'react'
import './index.css'
import { hover } from '@testing-library/user-event/dist/hover';
import ChessGrid from './components/ChessGrid';

const App = () => {
 
  return (
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <ChessGrid/>
      </div>
  )
}

export default App