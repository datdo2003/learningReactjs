import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import Btn from "./components/Btn";
import Toggler from "./components/Toggler";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
const data = {
      title: "99% sale off!",
      callToAction: "All items must go"
}

function App() {
  // return <Header />
  // try {
  //   (4).toUpperCase();
  // } catch (e) {
  //   console.log("Oops, something went wrong", e);
  // }
  // return <Heading />
  // return <Btn/>
  // return <Toggler />
  // return <Header title={data.title} callToAction={data.callToAction}/>
  return <InputComponent />
}

// function Header() {
//   return <h1>Hello world!!!</h1>;
// }

export default App;
