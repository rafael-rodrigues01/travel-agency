import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as S from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <S.GlobalStyle />
    <App />
  </React.StrictMode>,
)
