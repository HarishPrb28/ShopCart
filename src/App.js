import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/CartPage" Component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
