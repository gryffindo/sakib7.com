import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Portfolio from "./pages/Portfolio";
import Awards from "./pages/Awards";
import AbMe from "./pages/AbMe";
import Skills from "./pages/Skills";
import Article1 from "./article/1";
import Article2 from "./article/2";
import NotFound from "./pages/NotFound";

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
				<Route exact path="/about">
					<AbMe />
				</Route>
				<Route exact path="/skills">
					<Skills />
				</Route>

				{/* Article Routes */}
				<Route exact path="/article/1">
					<Article1 />
				</Route>
				<Route exact path="/article/2">
					<Article2 />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
      </Switch>
    </Router>
  );
}

export default App;
