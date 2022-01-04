import NavBar from "./components/NavBar";
import Product from "./components/Product";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUsers from "./components/EditUsers";
function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path="/" component={Product} exact />
      <Route path="/all-user" component={AllUsers} exact/>
      <Route path="/add-user" component={AddUsers} exact/>
      <Route path="/edit/:id" component={EditUsers} exact/>
      <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
