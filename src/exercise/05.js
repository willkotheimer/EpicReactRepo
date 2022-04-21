// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className={'box--small'}>small lightblue box</div>
const mediumBox = <div className={'box--medium'}>medium pink box</div>
const largeBox = <div className={'box--large'}>large orange box</div>

function Box ({size, style,  ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div className={sizeClassName} style={{fontStyle: 'italic', ...style}} { ...otherProps}/>
  );
}
function App() {
  return (
    <>
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>
    <Box size="medium" style={{backgroundColor: 'orange'}}>
      medium orange box
    </Box>
    <Box size="large" style={{backgroundColor: 'lightgreen'}}>
      Large green box
    </Box>
</>
  )
}

export default App
