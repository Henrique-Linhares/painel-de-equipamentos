import { useState } from "react";
import "./EquipamentoCard.css";

const EquipamentoCard = ({ equip }) => {
  const [status, setStatus] = useState(equip.status);

  return (
    <div className="equipCard">
      <div className="equipInfo">
        <img
          src={equip.imagem}
          alt={equip.equipamento}
          className="imagemEquipamento"
        />

        <div className="textoEquip">
          <h2 className="tituloProduto">{equip.equipamento}</h2>
          <p className={`status ${status}`}>{status}</p>
        </div>
      </div>

      <div className="botoes">
        <button className="btnAtivo" onClick={() => setStatus("Ativo")}>
          Ativo
        </button>
        <button className="btnRepouso" onClick={() => setStatus("Repouso")}>
          Repouso
        </button>
        <button className="btnInativo" onClick={() => setStatus("Inativo")}>
          Inativo
        </button>
      </div>
    </div>
  );
};

export default EquipamentoCard;
