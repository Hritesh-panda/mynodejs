import "./App.css";
import EditEmployee from "./component/Editemployee";
import Employeeform from "./component/Employeeform";
import Getemployee from "./component/Getemployee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Getemployee />,
  },
  {
    path: "/addemp",
    element: <Employeeform />,
  },
  {
    path: "/edit/:id",
    element: <EditEmployee />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
