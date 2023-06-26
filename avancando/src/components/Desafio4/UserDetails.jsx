import React from "react";

function UserDetails({ nome, idade, peso }) {
  return (
    <div>
      <h1>UserDetails</h1>
      Nome: {nome} . <br />
      Idade: {idade} <br />
      Peso: {peso} <br />
      <p>{idade > 18 && 'maior de 18'}</p>
    </div>
  );
}

export default UserDetails;
