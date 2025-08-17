import { ordensEquipamentos } from "./data/equipamentos";
import EquipamentoCard from "./components/EquipamentoCard";
import "./App.css"

function App() {
  return (
    <div className="painel">
      <h1 className="title">Painel de Equipamentos</h1>
       {ordensEquipamentos.map(equip => (
          <EquipamentoCard key={equip.id} equip={equip} />
        ))}
    </div>
  );
}

export default App;
