import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './components/Landing';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Landing />
    },

  ]
);

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </main>
  )
}

export default App
