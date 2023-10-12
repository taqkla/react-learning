import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';
import Button from "./Button";
import ComponentHider from "./ComponentHider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Prateek" />
    <Counter />
    <Button />
    <ComponentHider />
  </React.StrictMode>
);

