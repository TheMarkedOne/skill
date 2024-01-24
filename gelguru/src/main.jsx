import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css";


import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './context/UserContextProvider.jsx';
import { NextUIProvider } from '@nextui-org/system';



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <NextUIProvider>
          <App />
        </NextUIProvider>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </>
);

