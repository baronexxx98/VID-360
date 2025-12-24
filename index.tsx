
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Erro fatal na renderização do VIDA 360:", error);
  rootElement.innerHTML = `
    <div style="color: white; background: black; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; font-family: sans-serif;">
      <div>
        <h1 style="color: #ef4444;">ERRO DE INICIALIZAÇÃO</h1>
        <p>Houve uma falha ao carregar o sistema de emergência.</p>
        <button onclick="window.location.reload()" style="background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 10px;">
          RECARREGAR APP
        </button>
      </div>
    </div>
  `;
}
