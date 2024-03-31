import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import ContactMe from "./components/pages/ContactMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1> error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/0",
        element: <div>example</div>,
      },
      {
        path: "project/1",
        element: <div>example2</div>,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
