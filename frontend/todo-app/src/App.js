import logo from './logo.svg';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
import './App.css';

function App() {
  return (
    <div className="App">
         <Counter></Counter>
    </div>
  );
}


function ThirdComponent() {
  return (
    <div className="ThirdComponent">
         Third Component
    </div>
  );
}

export default App;
