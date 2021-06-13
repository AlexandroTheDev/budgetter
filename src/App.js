import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import MainNavbar from './components/layouts/MainNavbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AlertContextProvider from './contexts/alert/AlertContext';
import Alert from './components/layouts/Alert';

function App() {
  return (
    <AlertContextProvider>
      <Router>
        <MainNavbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </AlertContextProvider>
  );
}

export default App;
