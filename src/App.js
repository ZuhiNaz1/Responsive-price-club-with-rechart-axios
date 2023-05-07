import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import Chart from './components/Chart/Chart';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <h1 className='text-4xl font-bold mt-4'>This is responsive navbar with react.</h1>
        <p className='text-1xl font-bold mt-5'>It's all about practising & learning.</p>
      <Pricing></Pricing>
      <Chart></Chart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
