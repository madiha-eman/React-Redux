import './App.css';
import CounterInput from './components/CounterInput';
import CounterOut from './components/CounterOut';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CounterOut />
     <CounterInput />
     </Provider>
    </div>
  );
}

export default App;
