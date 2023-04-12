import './App.css';
import Counter from "./components/Counter";
import MealsProvider, {useMealsListContext} from "./provider/MealsProvider";
import MealsList from "./components/MealsList";
import {createContext, useContext} from "react";
import MealsCounter from "./components/MealsCounter";
import ThemeProvider from "./provider/ThemeProvider";
import ContextButton from "./components/ContextButton";

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
            {/*<MealsProvider>*/}
            {/*    <MealsList />*/}
            {/*    <MealsCounter />*/}
            {/*</MealsProvider>*/}
            <ThemeProvider>
                <ContextButton/>
            </ThemeProvider>
        </>
    )
}

export default App;
