import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import store from "./store";
import {Provider} from "react-redux";

function App() {
  document.title = "Busy Buy";

  return (
  <>
  <Provider store={store}> 
  <RouterProvider router={router}  />
  </Provider>
  </>
  );
}

export default App;
