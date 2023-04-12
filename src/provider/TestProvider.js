import {createContext, useContext, useState} from "react";

const TestContext = createContext();
function TestProvider({children}) {
    const [testValue] = useState('default value');
    return (
        <>
            <TestContext.Provider value={{testValue}}>
                {children}
            </TestContext.Provider>
        </>
    )
}

export const useTestContext = () => useContext(TestContext);
export default TestProvider;