
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Success from './components/Success/Success';
import Ready from './components/Ready/Ready';

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Expertise></Expertise>
      <Success></Success>
      <Ready></Ready>
    </>
  )
}

export default App
