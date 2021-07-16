
import './App.css';
import Introduction from './components/introduction';
import Cover from './components/cover'
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div>
    <Introduction></Introduction>
    <Cover></Cover>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
