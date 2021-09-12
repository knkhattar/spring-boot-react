import logo from './logo.svg';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent'
import './App.css';

function App() {
  return (
    <div className="App">
         My Hello World
         <FirstComponent></FirstComponent>
         <SecondComponent></SecondComponent>
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
