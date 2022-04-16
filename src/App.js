import './App.css';
import Mensaje from './Mensaje';

const Numeroxd = () => {
  return <h1>123456789</h1>
}

const Description = () => {
  return <h1>Esta es la app de entrenamiento con React y node.js, 
    <br/> por cierto, este es un componente xD</h1>
}

const  App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso '/>
      <Mensaje color='yellow' message='de react'/>
      <Description />
      <Numeroxd />
    </div>
  );
}

export default App;
