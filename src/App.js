import AuthContextProvider from './contexts/auth/AuthContext';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNav from './components/layouts/MainNav'
import Register from './components/pages/Register';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <MainNav />

        <Switch>
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
