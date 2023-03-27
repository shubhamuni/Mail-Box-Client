import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/Authentication/AuthForm";
import Homepage from "./components/Layout/Homepage";
import Mails from "./components/Mail/Mails";
import { Layout } from "./components/Layout/Layout";
import { useSelector } from "react-redux";

function App() {
  const isToken = useSelector((state) => state.token.token);
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/login">
            <AuthForm />
          </Route>
          <Route path="/mails">
            {isToken && <Mails />}
            {!isToken && <AuthForm />}
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
