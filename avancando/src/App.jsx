import { useState } from "react";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import DataManager from "./components/DataManager";
import ListRender from "./components/ListRende";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  const name = 'Jeremias';
  const [userName] = useState("malaquias");

  const cars = [
    { id: 1, brand: 'VW', km:154854, color : "AZUL", newCar: true },
    { id: 2, brand: 'Ford', color : "VERMELHA", newCar: false },
    { id: 3, brand: 'RENAULT', color : "PRETO", newCar: true }
  ]

  {/** passando funcao como prop */}
  function showMessage() {
    console.log('gestald118@gmail.com');
    
  }

  return (
    <div>

      <ExecuteFunction myFunctiocn={showMessage} />

      <hr />

      <Container>
        <p>Este é o conteudo</p>
      </Container>

      {/** children */}

      <hr />

      <Fragments />

      <hr />


      {/** loop em array de obejtos */}
      { cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} newCar={car.newCar} color={car.color} km={car.km}  />  
      ))}
         

      <hr />

      <ShowUserName name={userName} />

      <hr />

      <ConditionalRender />

      <hr />

      <ListRender />

      <hr />

      <DataManager />

      <hr />

      <div>
        {/** imagens que estão em public */}
        <img src="/img1.jpg" alt="" />
      </div>

      <div>
        {/** imagens em assets */}
        <img src={City} alt="Imagem city de assets" />
      </div>
    </div>
  );
}

export default App;
