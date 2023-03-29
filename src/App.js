import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/Authentication/AuthForm";
import Homepage from "./components/Layout/Homepage";
import ComposeEmail from "./components/Mail/ComposeEmail";
import { Layout } from "./components/Layout/Layout";
import { useSelector } from "react-redux";
import DisplayMails from "./components/Mail/DisplayMails";
import MailDetails from "./components/Mail/MailDetails";

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
            {isToken && <DisplayMails />}
            {!isToken && <AuthForm />}
          </Route>
          <Route path="/compose">
            {isToken && <ComposeEmail />}
            {!isToken && <AuthForm />}
          </Route>
          <Route path="/details">
            {isToken && <MailDetails />}
            {!isToken && <AuthForm />}
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
