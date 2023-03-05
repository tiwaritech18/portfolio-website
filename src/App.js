import Navbar  from './components/Navbar/Navbar';
import HeroSection  from './components/Hero-section/HeroSection';
import SocialLinks from './components/Social/SocialLinks';
import Projects from './components/Work/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SocialLinks />
      <Projects />
    </div>
  );
}

export default App;
