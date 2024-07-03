import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { setCookie } from "cookies-next"
import { Check } from "lucide-react"
import { useDifficulty } from "@/context/difficulty-context"

export const DifficultyButton = () => {

    const { difficulty, setDifficulty } = useDifficulty()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full"
                >
                    <h1>Dificuldade</h1>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                <DropdownMenuItem
                    className="w-full justify-between items-center"
                    onClick={() => {
                        setCookie("difficulty", "easy")
                        setDifficulty("easy")
                    }}
                >
                    Fácil
                    {difficulty === "easy" && <Check className="scale-75" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="w-full justify-between items-center"
                    onClick={() => {
                        setCookie("difficulty", "mid")
                        setDifficulty("mid")
                    }}
                >
                    Médio
                    {difficulty === "mid" && <Check className="scale-75" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="w-full justify-between items-center"
                    onClick={() => {
                        setCookie("difficulty", "hard")
                        setDifficulty("hard")
                    }}
                >
                    Difícil
                    {difficulty === "hard" && <Check className="scale-75" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
