import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "./ui/card"
import { useDifficulty } from "@/context/difficulty-context"
import { PieceProps } from "./game"
import { Animation } from "./animation"

interface CardFlipProps {
    couple: PieceProps
    index: number
}

export const CardFlip = ({ couple, index: i }: CardFlipProps) => {

    const [flip, setFlip] = useState<boolean>(false)

    const { difficulty } = useDifficulty()
    const { Icon } = couple

    const isFlip = flip ? "flip-horizontal-left-hover" : undefined

    return (
        <Animation
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
                duration: 0.3, delay: i * 0.1
            }}
        >
            <div
                className={twMerge("flip-card flip-horizontal-left", isFlip)}
                onClick={() => setFlip(!flip)}
            >
                <div className="flip-card-inner">
                    <Card
                        className={twMerge(
                            "flex items-center justify-center p-2 border border-primary",
                            "flip-card-front",
                            difficulty === "easy" && "size-24",
                            (
                                difficulty === "mid" || difficulty === "hard"
                            ) && "size-20"
                        )}
                    />

                    <Card className={twMerge(
                        "flex items-center justify-center p-2 border border-primary",
                        "flip-card-back",
                        difficulty === "easy" && "size-24",
                        (
                            difficulty === "mid" || difficulty === "hard"
                        ) && "size-20"
                    )}>
                        <Icon
                            className={twMerge(
                                difficulty === "easy"
                                && "scale-150"
                            )}
                        />
                    </Card>
                </div>
            </div>
        </Animation>
    )
}