import { createContext, useState } from 'react';

export const MediumContext = createContext({
    oddCount: 0,
    evenCount: 0,
    setOddCount: () => {},
    setEvenCount: () => {},
});

export function MediumProvider({ children }) {
    const [oddCount, setOddCount] = useState(0);
    const [evenCount, setEvenCount] = useState(0);

    return (
        <MediumContext.Provider value={{ oddCount, evenCount, setOddCount, setEvenCount }}>
            {children}
        </MediumContext.Provider>
    );
}
