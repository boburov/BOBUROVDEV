import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App