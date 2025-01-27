import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming your main component is in App.js

// Find the root DOM node
const container = document.getElementById('root');

if (container) {
  // Create a root and render your React application
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}