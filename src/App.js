import Start from "./Start";
import Form from "./Form";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;