import React, { useEffect, useState } from 'react'


const MouseEvent = () => {
    
    const [mouseX,setMouseX] = useState(0)
    const [mouseY,setMouseY] = useState(0)


    const handleMove = e =>{
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    useEffect (()=>{

      console.log("Me monto y me actualizo",window.addEventListener('mousemove',handleMove));
      
      console.log(mouseX,mouseY);

      return () => {
        console.log("hola me estoy desmontando",window.removeEventListener('mousemove',handleMove));
      }

    })
    



  return (

    <>
        <h1>Evento Mouse</h1>
        <h3>
            x: {mouseX}  y: {mouseY}
        </h3>
    </>
    
  )
}

export default MouseEvent