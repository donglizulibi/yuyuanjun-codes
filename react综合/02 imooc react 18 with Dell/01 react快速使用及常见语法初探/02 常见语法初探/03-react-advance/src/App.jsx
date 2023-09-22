import { useState } from 'react'
import UseOfRef from "./conponents/UseOfRef"
import UseOfEffect from './conponents/UseOfEffect'

function App() {


  return (
    <div>
      <h2>Ref的使用</h2>
      <UseOfRef />

      <h2>Effect的使用</h2>
      <UseOfEffect />
    </div>
  )
}

export default App
