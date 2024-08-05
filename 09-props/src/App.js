import './App.css';
import PetInfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="Dock" age="13" />
      <PetInfo animal="Dog" age="16" />
    </div>
  );
}

export default App;
