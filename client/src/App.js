import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TravelLogs from "./pages/TravelLogs";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/travellog">
          <TravelLogs />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
