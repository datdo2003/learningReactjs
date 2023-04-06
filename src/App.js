import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import Btn from "./components/Btn";
import Toggler from "./components/Toggler";
import Header from "./components/Header";
import Counter from "./components/Counter";
import InputComponent from "./components/InputComponent";
import Form from "./components/Form";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
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
  return (
      <div>
        <Counter />
        <InputComponent />
          <Form />
          <TextInputWithFocusButton />
      </div>
)
}

// function Header() {
//   return <h1>Hello world!!!</h1>;
// }

export default App;
