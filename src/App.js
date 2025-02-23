
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Head} from './components/Head';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Body } from './components/Body';
import { Footer} from "./components/Footer";
import { About} from './components/About';
import { Contact } from './components/Contact';
import { Proyects } from './components/Proyects';


function App() {
  return (
    <div>
      <Head />
    
      <Body />
    
      <About />
    
      <Proyects/>
    
      <Contact/>

    <Footer />  
    </div>

  );
}

export default App;
