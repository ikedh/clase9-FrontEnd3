import React, { useEffect, useState } from 'react'

const ComponenteFuncional = () => {

    const[click,setClick]= useState(0)



/* 
    useEffect(() => {
      
      //componentDidMount
      console.log("Componente Montado");
      
      //actualizar 

      console.log("%c----------------", "color : red");

      return () => {
        //Se desmontará
        console.log("se reinicia el Ciclo de Vida");
      }

    }, [click]) */
    


    const handleClick = () => {
      setClick( click + 1 )
    }

  return (
    <div>
        <h2>Hooks / Functional Component</h2>
        <button
            onClick={handleClick}
        >
            Agregar : {click}
        </button>
    </div>
  )
}

export default ComponenteFuncional