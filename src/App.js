import AuthContextProvider from './contexts/auth/AuthContext';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNav from './components/layouts/MainNav'
import Register from './components/pages/Register';
import AlertContextProvider from './contexts/alert/AlertContext';
import Alerts from './components/layouts/Alerts';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <Router>
          <MainNav />
          <Alerts />
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </AlertContextProvider>
    </AuthContextProvider>
  );
}

export default App;
