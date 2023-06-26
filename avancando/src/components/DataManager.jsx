import { useState } from "react";

const DataManager = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <div>
      <h2>DataManager</h2>
      <p>Valor de someData {someData}</p>
      <button>Mudar valor da variavel</button>

      <div>
        <p>NUmber : {number}</p>
        <button onClick={() => setNumber(25)}>Alterar</button>
      </div>
    </div>
  );
};

export default DataManager;
