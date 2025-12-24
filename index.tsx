
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  console.error("Erro crítico: Elemento #root não encontrado.");
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Falha ao iniciar VIDA 360:", error);
    container.innerHTML = `
      <div style="background:black;color:white;height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;font-family:sans-serif;">
        <div>
          <h1 style="color:#ef4444;font-size:24px;">FALHA DE SISTEMA</h1>
          <p style="margin:10px 0;">Ocorreu um erro ao carregar os módulos de resgate.</p>
          <button onclick="window.location.reload()" style="background:#ef4444;color:white;border:none;padding:12px 24px;border-radius:12px;font-weight:bold;margin-top:10px;cursor:pointer;">RECARREGAR</button>
        </div>
      </div>
    `;
  }
}
