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
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/Desafio4/UserDetails";

function App() {
  const name = 'Jeremias';
  const [userName] = useState("malaquias");

  const cars = [
    { id: 1, brand: 'VW', km:154854, color : "AZUL", newCar: true },
    { id: 2, brand: 'Ford', color : "VERMELHA", newCar: false },
    { id: 3, brand: 'RENAULT', color : "PRETO", newCar: true }
  ]

  const pessoas = [
    {  nome: "Jailson", idade: 28, peso: 96, id: 1},
    {  nome: "Jessica Helena", idade: 23, peso: 70, id:2},
    {  nome: "Caleb Romeo", idade: 3, peso: 12, id:3},
    {  nome: "Jughead", idade: 3, peso: 10, id:4},
    {  nome: "Judy", idade: 5, peso: 5, id:5},
]

  {/** passando funcao como prop */}
  function showMessage() {
    console.log('gestald118@gmail.com')    
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div>

      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} peso={pessoa.peso} />
      ))}
     
      
      <Message msg={message} />

      <ChangeMessageState handleMessage={handleMessage} />

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
