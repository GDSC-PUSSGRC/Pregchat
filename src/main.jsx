import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';

// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

// Kommunicate.init(import.meta.env.VITE_KOMMUNICATE_APP_ID, {
//   popupWidget: true,
//   automaticChatOpenOnNavigation: true,
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

