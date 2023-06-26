import React from "react"


const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>CarDetails</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>           
        </ul>
        {newCar && <p>Novo</p>}
    </div>
  )
}

export default CarDetails