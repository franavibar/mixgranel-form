import React, { useState } from "react";
import "./FormPopup.css";
import logo from "../assets/mixgranel-logo.png";

const FormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    objetivo: "",
    frequencia: "",
    restricoes: "",
    preferenciaMarca: "",
  });

  const togglePopup = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Formulário enviado com sucesso!");
    setIsOpen(false);
  };

  return (
    <div className="popup-container">
      <button onClick={togglePopup} className="open-btn">Indicação de Suplemento</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <img src={logo} alt="Mix Granel Logo" className="logo" />
            <h2>Vamos te ajudar a encontrar o suplemento ideal</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Qual seu objetivo principal?
                <select name="objetivo" value={formData.objetivo} onChange={handleChange} required>
                  <option value="">Selecione</option>
                  <option value="ganho-massa">Ganho de massa muscular</option>
                  <option value="perda-peso">Perda de peso</option>
                  <option value="energia">Energia e desempenho</option>
                  <option value="bem-estar">Saúde e bem-estar</option>
                </select>
              </label>
              <label>
                Com que frequência você treina?
                <select name="frequencia" value={formData.frequencia} onChange={handleChange} required>
                  <option value="">Selecione</option>
                  <option value="1-2">1 a 2 vezes por semana</option>
                  <option value="3-4">3 a 4 vezes por semana</option>
                  <option value="5-7">5 a 7 vezes por semana</option>
                </select>
              </label>
              <label>
                Possui alguma restrição ou preferência (ex: sem lactose)?
                <input type="text" name="restricoes" value={formData.restricoes} onChange={handleChange} />
              </label>
              <label>
                Tem alguma marca preferida?
                <input type="text" name="preferenciaMarca" value={formData.preferenciaMarca} onChange={handleChange} />
              </label>
              <button type="submit">Enviar</button>
            </form>
            <button className="close-btn" onClick={togglePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;