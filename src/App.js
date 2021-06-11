import RecordContextProvider from './context/RecordContext';
import './App.scss';
import MainNavbar from './components/layout/MainNavbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <RecordContextProvider>
      <Router>
        <div className="App">
          <MainNavbar/>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </RecordContextProvider>
  );
}

export default App;
