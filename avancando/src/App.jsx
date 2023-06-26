import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import DataManager from "./components/DataManager";
import ListRender from "./components/ListRende";

function App() {
  return (
    <div>

      <ConditionalRender />
      
      <ListRender />

      <DataManager />

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
