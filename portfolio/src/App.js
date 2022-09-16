import './App.css';
import AboutMe from './components/AboutMe';
import Nav from '../src/components/Navigation';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
