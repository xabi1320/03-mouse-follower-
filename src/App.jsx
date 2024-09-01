import { useEffect, useState } from "react"

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log({enable})
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log({clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    //clean up
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #ffff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      {/* <h3>Proyecto 3</h3> */}
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
    </main>
  )
}

export default App
