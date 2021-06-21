import Header from "./components/header";
import "./styles/main.css";
import Hero from "./components/home/hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/home/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <Hero />
          </div>
        </Route>
        <Route exact path="/article">
          <Header />
        </Route>
        <Route exact path="/portfolio">
          <Header />
        </Route>
        <Route exact path="/awards">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;