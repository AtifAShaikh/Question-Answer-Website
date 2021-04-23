import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import QuestionPage from './pages/QuestionPage'


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/"]}>
            <Landing/>
          </Route>
          <Route exact path={['/home']}>
            <Home></Home>
          </Route>
          <Route exact path="/question/:id">
            <QuestionPage></QuestionPage>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
