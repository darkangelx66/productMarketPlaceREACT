import React from 'react';
import ReactDOM from 'react-dom/client';
import { Patito, Header } from './App';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Proveedor from './proveedor';
import Usuarios from './usuarios';
import DetailPage from './detail';
import AcercaDe from './acercaDe';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// si se fijan como use export defaul no lleva {} y el nombre de la clase/variable/funcion es irrelevante ya que solo hay un objeto de export
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Patito/>}/>
            <Route path="/provedor" element={<Proveedor />}/> 
            <Route path="/usuarios" element={<Usuarios />}/>
            <Route path="/detalles" element={<DetailPage />}/>
            <Route path="/acercaDe" element={<AcercaDe />}/>
        </Routes>                    
      </BrowserRouter>
  </React.StrictMode>
);

