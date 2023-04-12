import {useTestContext} from "../provider/TestProvider";

function TestComponent() {
    // If the name of the variable here (testValue) is not the same as in the Provider. Then, the value will be empty/null
    const {testValue} = useTestContext();
    return (
        <>
            <h1>Test component</h1>
            <h2>Value from TestContext *{testValue}*</h2>
        </>
    )

}

export default TestComponent;