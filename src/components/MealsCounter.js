import {useMealsListContext} from "../provider/MealsProvider";

function MealsCounter() {
    const {meals} = useMealsListContext();
    return (
        <>
            <h6>Number of meals today {meals.length}</h6>
        </>
    )
}

export default MealsCounter;