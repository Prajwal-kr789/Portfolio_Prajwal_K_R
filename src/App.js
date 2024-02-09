import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Intro from './Components/Intro';



function App() {
  return (

    <div>
      <Header/>
      <Intro/>
      <Body/>
      <Services/>
      <Contact/>
    </div>

  );
}

export default App;
