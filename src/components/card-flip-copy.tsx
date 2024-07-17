import { useState } from "react"
import { CardFlipProps, PieceProps } from "@/@types"
import { useDifficulty } from "@/context/difficulty-context"
import { Swords } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Card } from "./ui/card"
import { Animation } from "./animation"

export const CardFlip = ({
    firstItem, setFirstItem,
    secondItem, setSecondItem,
    errorCouple, setErrorCouple,
    array, setArray,
    couple, index: i
}: CardFlipProps) => {

    const [flip, setFlip] = useState<boolean>(false)

    const { difficulty, setIsRunning, isRunning } = useDifficulty()

    function validateCouple(couple: PieceProps) {

        let { Icon: { displayName }, id } = couple

        if (!displayName) return

        if (!firstItem) {

            setFlip(true)
            setIsRunning(true)

            setFirstItem(couple)

            setArray([couple])

        } else if (firstItem && !secondItem && firstItem.id !== id) {

            setSecondItem(couple)
            setFlip(true)
            setArray([...array, couple])

            const { Icon: { displayName } } = firstItem
            const { Icon: { displayName: nameItem } } = couple

            if (displayName === nameItem) {
                console.log("acertou")
            } else {

                setTimeout(() => setErrorCouple(true), 1000)

                setFirstItem(null)
                setSecondItem(null)
                setArray([])

                console.log("errou")
            }
        }
    }

    console.log(flip)

    return (
        <Animation
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={twMerge(difficulty === "easy" && "m-2")}
        >
            <div
                className="w-full flex items-center justify-center"
                onClick={() => validateCouple(couple)}
            >
                {
                    !flip ? <FrontCard /> : <BackCard couple={couple} />
                }
            </div>
        </Animation>
    )
}

const FrontCard = () => {

    const { difficulty } = useDifficulty()

    return (
        <Card className={twMerge(
            "flex items-center justify-center p-2 border border-primary",
            difficulty === "easy" && "size-24",
            (
                difficulty === "mid" || difficulty === "hard"
            ) && "size-20"
        )}>
            <Swords
                className={twMerge(
                    difficulty === "easy"
                    && "scale-150"
                )}
            />
        </Card>
    )
}

const BackCard = ({ couple }: { couple: PieceProps }) => {

    const { difficulty } = useDifficulty()
    const { Icon } = couple

    return (
        <Card className={twMerge(
            "flex items-center justify-center p-2 border border-primary",
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
    )
}