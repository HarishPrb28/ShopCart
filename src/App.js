import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/HomePage";
import Cart from "./Component/CartPage";
import Navbar from "./Component/NavBar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route exact path="/" Component={Navbar}>
            <Route path="/" Component={Home} />
            <Route path="/CartPage" Component={Cart} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
