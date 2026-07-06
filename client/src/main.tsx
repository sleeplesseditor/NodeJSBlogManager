import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import 'materialize-css/dist/css/materialize.min.css';
import App from '@components/App.tsx';
import { Provider } from 'react-redux';
import { getStore } from '@modules/redux/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__:
      import('@tanstack/query-core')
        .QueryClient
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <Provider store={getStore()}>
        <RouterProvider router={router} />
        <App />
      </Provider>
    </StrictMode>
  </QueryClientProvider>,
)
