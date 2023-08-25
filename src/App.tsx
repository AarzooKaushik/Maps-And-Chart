import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from './components/contactList/index'
import Map from "./components/map/index";
import LayOut from "./pages/layOut";
import Graph from  "./components/graph/index";

import Error from "./pages/errorPage/index";

const router = createBrowserRouter([

  {
    path: "/",
    element: <LayOut />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ContactPage /> },
      { path: "graph", element: <Graph /> },
      { path: "maps", element:  <Map /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;