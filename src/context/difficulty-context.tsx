"use client"

import { CookieValueTypes, getCookie } from "cookies-next"
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react"

interface DifficultyContextProps {
    difficulty: CookieValueTypes
    setDifficulty: Dispatch<SetStateAction<CookieValueTypes>>
}

const DifficultyContext = createContext({} as DifficultyContextProps)

export function DifficultyProvider({ children }: { children: ReactNode }) {

    const cookies = getCookie("difficulty")

    const [difficulty, setDifficulty] = useState<CookieValueTypes>(cookies)

    const value: DifficultyContextProps = {
        difficulty, setDifficulty
    }

    return (
        <DifficultyContext.Provider value={value}>
            {children}
        </DifficultyContext.Provider>
    )
}

export const useDifficulty = () => useContext(DifficultyContext)