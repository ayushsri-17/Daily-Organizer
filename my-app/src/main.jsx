import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the entire app inside GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId='604121573179-nrerh4ut72l6pech5mg8ehio7jmjs81b.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
