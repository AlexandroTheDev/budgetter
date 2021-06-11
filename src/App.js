import RecordContextProvider from './context/RecordContext';
import './App.scss';

function App() {
  return (
    <RecordContextProvider>

      <div className="App">
        <h1>Header Typography test</h1>
        body typhography test
      </div>
    </RecordContextProvider>
  );
}

export default App;
