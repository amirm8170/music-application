import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import store from "./redux/store";
import Router from "./Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
