import './App.css';
import MyComponent from './components/MyComponent.js';
import OtherComponent from './components/OtherComponent';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
      <MyComponent />
    </div>
  );
}

export default App;

