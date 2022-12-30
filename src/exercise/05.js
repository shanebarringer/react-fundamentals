// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style}) => (
  <div className={`box box--${size}`} style={{font: 'italic', ...style}}>
    {`${size} ${style.backgroundColor} box`}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}></Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}></Box>
      <Box size="large" style={{backgroundColor: 'orange'}}></Box>
    </div>
  )
}

export default App
