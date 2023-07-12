import { createContext, ReactNode, useEffect, useState } from "react";
import { SelectType } from "../customTypes/selectTypes";

import paintOptions from '../utils/paintOptions';

interface UserContextData {
    maxHeight: number;
    minHeight: number;
    paintOption: number;
    paintOptions: Array<SelectType>;
    setMaxHeight: (value: number) => void;
    setMinHeight: (value: number) => void;
    setPaintOption: (value: number) => void;
}

interface UserProviderProps{
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
    const [maxHeight, setMaxHeight] = useState(60);
    const [minHeight, setMinHeight] = useState(50);
    const [paintOption, setPaintOption] = useState(paintOptions[0].value);

    return(
        <UserContext.Provider value={{
            maxHeight,
            minHeight,
            paintOption,
            paintOptions,
            setMaxHeight,
            setMinHeight,
            setPaintOption
        }}>
            {children}
        </UserContext.Provider>
    )
}