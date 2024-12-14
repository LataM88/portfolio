import './App.css';
import Navbar from './components/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Services from './components/Services/services';
import MyWork from './components/MyWork/mywork';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
