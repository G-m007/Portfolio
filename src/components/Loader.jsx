import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        Loading...
      </p>
    </Html>
  )
}

export default CanvasLoader;