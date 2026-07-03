import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@components/App.tsx';
import { Provider } from 'react-redux';
import { getStore } from '@modules/redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </StrictMode>,
)
