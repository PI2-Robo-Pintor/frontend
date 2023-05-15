import { createContext, ReactNode, useEffect, useState } from "react";

import paintOptions from '../utils/paintOptions';

interface UserContextData {
    maxHeight: number;
    minHeight: number;
    paintOption: string;
    setMaxHeight: (value: number) => void;
    setMinHeight: (value: number) => void;
    setPaintOption: (value: string) => void;
}

interface UserProviderProps{
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
    const [maxHeight, setMaxHeight] = useState(10);
    const [minHeight, setMinHeight] = useState(10);
    const [paintOption, setPaintOption] = useState(paintOptions[0].value);

    useEffect(() => {
        console.log(maxHeight);
        console.log(minHeight);
        console.log(paintOption)
    }, [maxHeight, minHeight, paintOption]);

    return(
        <UserContext.Provider value={{
            maxHeight,
            minHeight,
            paintOption,
            setMaxHeight,
            setMinHeight,
            setPaintOption
        }}>
            {children}
        </UserContext.Provider>
    )
}