
import './App.css';
import Navbar from './Components/Navigation/index';
import Textform from './Components/Textform/index';


function App() {
  return (
    <>
    <Navbar title= "Textutils" About="About Textutils"/>
    <div className="container my-3">
    <Textform heading = "Enter the text below to analyze"/>
    </div>
    </>
  );
}

export default App;
