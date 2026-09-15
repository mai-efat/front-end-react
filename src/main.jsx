import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fontsource/newsreader/700-italic.css';
import '@fontsource/newsreader/500-italic.css';
import '@fontsource/newsreader/700.css';
import '@fontsource/newsreader/600.css';
import '@fontsource/newsreader/500.css';
import '@fontsource/newsreader/400.css';

import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/400.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
