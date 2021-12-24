import React from 'react';
import logo from './logo.svg';
import Router from './compnents/Router'
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime:1000 * 60 * 60 * 24, // 24 hours 1000 * 60 * 60 * 24
    },
  },
});
const localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})
persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})
function App() {
  return (
   <>
   <QueryClientProvider client={queryClient}>

  <Router/>
   </QueryClientProvider>
   </>
  );
}

export default App;
