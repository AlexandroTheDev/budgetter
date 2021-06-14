import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import MainNavbar from './components/layouts/MainNavbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AlertContextProvider from './contexts/alert/AlertContext';
import Alert from './components/layouts/Alert';
import RecordContextProvider from './contexts/record/RecordContext';
import Records from './components/pages/Records';
import Categories from './components/pages/Categories';
import CategoryContextProvider from './contexts/category/CategoryContext';

function App() {
  return (
    <AlertContextProvider>
      <CategoryContextProvider>
        <RecordContextProvider>
          <Router>
            <MainNavbar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/records" component={Records} />
              <Route exact path="/categories" component={Categories} />
            </Switch>
          </Router>
        </RecordContextProvider>
      </CategoryContextProvider>
    </AlertContextProvider>
  );
}

export default App;
