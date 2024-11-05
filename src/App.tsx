import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router/MainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};
export default App;
