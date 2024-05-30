import "./App.css";

import ProductDetails from "./Pages/ProductDetails";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/ProductDetails", element: <ProductDetails /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
