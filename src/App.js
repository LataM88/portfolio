import './App.css';
import Navbar from './components/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Services from './components/Services/services';
import MyWork from './components/MyWork/mywork';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
    </div>
  );
}

export default App;
