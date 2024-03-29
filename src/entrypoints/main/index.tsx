import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './app';

const element = document.getElementById('root');

if (element) {
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
