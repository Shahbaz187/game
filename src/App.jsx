import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePlay from "./Components/GamePlay.jsx";
import StartGame from "./Components/StartGame.jsx";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartGame />,
  },
  {
    path: "/play",
    element: <GamePlay />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
