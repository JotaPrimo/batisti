import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Joãos");

  return (
    <div>
      <h1>Isso será exibido ?</h1>
      {x && <p>se x for true, sim</p>}
      <hr />

      {name === "João" ? (
        <div>
          <p>EAE João</p>
        </div>
      ) : (
        <div>
          <p>Não é o João</p>
          <button onClick={() => setName("João")}>Alterar Nome</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
