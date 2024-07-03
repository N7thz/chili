import { Card } from "./ui/card"
import { Animation } from "./animation"
import { twMerge } from "tailwind-merge"
import { useDifficulty } from "@/context/difficulty-context"
import { PieceProps } from "./game"

interface CardPieceProps {
    coupleArray: PieceProps[]
}

export const CardPiece = ({ coupleArray }: CardPieceProps) => {

    const { difficulty } = useDifficulty()

    return (
        <>
            {
                coupleArray.map((couple, i) => {

                    const { Icon, id } = couple

                    return (
                        <Animation
                            key={id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.3, delay: i * 0.1
                            }}
                        >
                            <Card
                                className={twMerge(
                                    "flex items-center justify-center p-2 border border-primary",
                                    "flip-card-front",
                                    difficulty === "easy" && "size-24",
                                    (
                                        difficulty === "mid" || difficulty === "hard"
                                    ) && "size-20"
                                )}
                            >
                                <Icon className={twMerge(
                                    difficulty === "easy"
                                    && "scale-150"
                                )} />
                            </Card>
                        </Animation>
                    )
                })
            }
        </>
    )
}
