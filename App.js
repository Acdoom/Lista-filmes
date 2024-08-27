import React, { useState } from 'react';
import './App.css';

function GerenciadorDeFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [entradaFilme, setEntradaFilme] = useState('');

  const adicionarFilme = () => {
    if (entradaFilme.trim() !== '') {
      setFilmes([...filmes, { titulo: entradaFilme, assistido: false }]);
      setEntradaFilme('');
    }
  };

  const alternarFilme = (index) => {
    const novosFilmes = filmes.map((filme, i) => 
      i === index ? { ...filme, assistido: !filme.assistido } : filme
    );
    setFilmes(novosFilmes);
  };

  const removerFilme = (index) => {
    setFilmes(filmes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Gerenciador de Filmes</h1>
      <div>
        <input 
          type="text" 
          value={entradaFilme} 
          onChange={(e) => setEntradaFilme(e.target.value)} 
          placeholder="Adicione um novo filme"
        />
        <button onClick={adicionarFilme}>Adicionar Filme</button>
      </div>
      <ul>
        {filmes.map((filme, index) => (
          <li key={index} style={{ textDecoration: filme.assistido ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={filme.assistido} 
              onChange={() => alternarFilme(index)} 
            />
            {filme.titulo}
            <button onClick={() => removerFilme(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GerenciadorDeFilmes />
    </div>
  );
}

export default App;
