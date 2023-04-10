import './App.css';
import Counter from "./components/Counter";
import MealsProvider, {useMealsListContext} from "./provider/MealsProvider";
import MealsList from "./components/MealsList";
import {useContext} from "react";
import MealsCounter from "./components/MealsCounter";

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
    // return (
    //     <div>
    //         <Counter/>
    //         <InputComponent/>
    //         <Form/>
    //         <TextInputWithFocusButton/>
    //     </div>
    // )
    // Demo using useContext
    const mealsContext = useMealsListContext();
    return (
        <>
            <MealsProvider>
                <MealsList />
                <MealsCounter />
            </MealsProvider>
        </>
    )
}

export default App;
