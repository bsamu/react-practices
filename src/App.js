// import logo from './logo.svg';
import './App.css';
import ButtonClick from './components/buttonClick';

function App() {

  const buttonText = "New button text"

  return (
    <div className="base">
      <ButtonClick text={buttonText} />
    </div>
  )
}

export default App;

/*
Kell egy új komponens, 10x egymás után kirendereli ezt a button komponenst, amit csináltunk. Legyen ez ButtonList. A ButtonList hívja meg 10x a ButtonClicket. Kikötés: ciklussal kell(nem 10x leírom)
*/