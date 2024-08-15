import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { QueryClient , QueryClientProvider } from 'react-query'
import{ ReactQueryDevtools } from 'react-query/devtools'
import Toast from './components/Toast';

const queryClient = new QueryClient();

ReactDOM.render(
    <ContextProvider>
        <QueryClientProvider client={queryClient}>
    <App />
    <Toast />
    <ReactQueryDevtools initialIsOpen = {false} />
    </QueryClientProvider>
    </ContextProvider>
    ,
document.getElementById('root')
);
