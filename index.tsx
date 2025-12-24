
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("VIDA 360: Iniciando motor de resgate...");

const init = () => {
  const container = document.getElementById('root');

  if (!container) {
    console.error("VIDA 360: Falha Crítica - Elemento #root ausente.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("VIDA 360: Sistema Operacional Online.");
  } catch (error) {
    console.error("VIDA 360: Erro na Renderização:", error);
    container.innerHTML = `
      <div style="background:black;color:white;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;font-family:sans-serif;">
        <h1 style="color:#ef4444;font-size:32px;font-weight:900;margin-bottom:10px;">ERRO DE SISTEMA</h1>
        <p style="color:#666;max-width:300px;line-height:1.5;">Houve um problema ao carregar os módulos de IA. Isso geralmente é resolvido limpando o cache.</p>
        <button onclick="window.location.reload(true)" style="background:#ef4444;color:white;border:none;padding:15px 30px;border-radius:15px;font-weight:bold;margin-top:20px;cursor:pointer;">REFORÇAR CARREGAMENTO</button>
      </div>
    `;
  }
};

// Executa assim que o script é carregado
init();
