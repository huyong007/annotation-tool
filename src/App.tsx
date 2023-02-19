import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
//@ts-ignore
import init, { greet, draw_smile_face, clear } from 'wasm-canvas'
import './App.less'
import { Button } from 'antd'

function App() {
  useEffect(() => {
    init()
  }, [])

  const mouseDown = (e: MouseEvent) => {
    console.log('按下了')
  }

  const frameMouseDown = (e: MouseEvent) => {

    console.log('frame 被按下了')
  }

  return (
    <div className="App">
      <div className='canvas-container'>
        <div className="canvas-wrap" onMouseDown={(e: any) => frameMouseDown(e)}>
          <canvas id="canvas" onMouseDown={(e: any) => mouseDown(e)}></canvas>
        </div>
      </div>
      <div className="operate-region-wrap">
        <Button onClick={() => greet('every one')}>
          greet
        </Button>
        <Button onClick={() => draw_smile_face()}>
          draw
        </Button>

        <Button  danger onClick={() => clear()}>
          clear
        </Button>
      </div>

    </div>
  )
}

export default App
