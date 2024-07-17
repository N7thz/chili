"use client"

import { getCookie } from "cookies-next"
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react"

interface DifficultyContextProps {
    difficulty: string
    setDifficulty: Dispatch<SetStateAction<string>>
    isRunning: boolean
    setIsRunning: Dispatch<SetStateAction<boolean>>
}

const DifficultyContext = createContext({} as DifficultyContextProps)

export function DifficultyProvider({ children }: { children: ReactNode }) {

    const cookies = getCookie("difficulty") ?? "mid"

    const [difficulty, setDifficulty] = useState<string>(cookies)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    const value: DifficultyContextProps = {
        difficulty, setDifficulty,
        isRunning, setIsRunning
    }

    return (
        <DifficultyContext.Provider value={value}>
            {children}
        </DifficultyContext.Provider>
    )
}

export const useDifficulty = () => useContext(DifficultyContext)