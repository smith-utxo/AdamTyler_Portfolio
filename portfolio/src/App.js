import './App.css';
import AboutMe from './components/AboutMe';
import Nav from '../src/components/Navigation';
import ContactForm from './components/Contact';

function App() {

   return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
