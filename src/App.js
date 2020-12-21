import './App.css';
import CounterInput from './components/CounterInput';
import CounterOut from './components/CounterOut';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTodo from './store/AddTodo';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo/>
      {/* <CounterOut />
     <CounterInput /> */}
     </Provider>
    </div>
  );
}

export default App;
