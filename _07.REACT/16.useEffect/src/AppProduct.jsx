import React, { useState } from 'react'
import Products from './Products'

const AppProduct = () => {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button
      onClick={()=>{setShowProducts(!showProducts)}}>Toggle</button>
    </div>
  )
}

export default AppProduct