import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Portfolio from "./pages/Portfolio";
import Awards from "./pages/Awards";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/article">
          <Article />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/awards">
					<Awards />
				</Route>
      </Switch>
    </Router>
  );
}

export default App;
