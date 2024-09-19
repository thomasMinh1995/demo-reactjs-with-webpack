import React, { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import TodoApp from './TodoApp';

const App = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <TodoApp/>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);