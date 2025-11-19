import { createContext, useState } from 'react';

export const EasyContext = createContext();

export const EasyProvider = ({ children }) => {
    const [easyCompleted, setEasyCompleted] = useState(false);

    return (
        <EasyContext.Provider value={{ easyCompleted, setEasyCompleted }}>
            {children}
        </EasyContext.Provider>
    );
};
