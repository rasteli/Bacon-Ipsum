import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Landing from "./components/Landing"
import ScrollToTop from "./utils/ScrollToTop"
import BaconIpsum from "./components/BaconIpsum"

function App() {
  const [ipsum, setIpsum] = useState([])

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Landing setIpsum={setIpsum} />}
        />
        <Route
          path="/bacon-ipsum"
          component={() => <BaconIpsum ipsum={ipsum} />}
        />
      </Switch>
    </Router>
  )
}

export default App
