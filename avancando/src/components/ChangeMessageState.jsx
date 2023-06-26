import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
  
    const messages = ["oi", "Olá", "Oi, tudo bem"]
  
    return (
    <div>
        <h1>ChangeMessageState</h1>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )

}

export default ChangeMessageState