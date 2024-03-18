import React from 'react'
import ReactDOM from 'react-dom/client'
import Topo from "./components/Topo.jsx";
import Rodape from './components/Rodape.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topo />
    <Rodape />
  </React.StrictMode>,
)