"use client"

import {
    useEffect, useState
} from "react"
import { uuid as randomID } from 'uuidv4'
import { ArrowLeft } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/navigation"
import { useDifficulty } from "@/context/difficulty-context"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { CardPiece } from "./card-piece"
import { pieces } from "@/lib/icons"
import { Timer } from "./timer"
import { PieceProps, Couple } from "@/@types"

export const Game = () => {

    const [coupleArray, setCoupleArray] = useState<PieceProps[]>([])

    const { difficulty, setDifficulty } = useDifficulty()
    const { push } = useRouter()

    console.log(difficulty)

    function generateCouples() {

        if (difficulty === "easy") {

            const piecesInterval = pieces.slice(0, 4)

            const intervalObject = piecesInterval.map(piece => {

                const object: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                const pair: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                return { object, pair }
            })

            return intervalObject
        } else if (difficulty === "mid") {

            const piecesInterval = pieces.slice(0, 16)

            const intervalObject = piecesInterval.map(piece => {

                const object: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                const pair: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                return { object, pair }
            })

            return intervalObject
        } else {

            const piecesInterval = pieces.map(piece => {

                const object: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                const pair: PieceProps = {
                    id: randomID(),
                    Icon: piece
                }

                return { object, pair }
            })

            return piecesInterval
        }
    }

    function generateGame(coupleArray: Couple[]) {

        const objectArray = coupleArray.map(half => {

            const { object } = half

            return object
        })

        const pairObject = coupleArray.map(half => {

            const { pair } = half

            return pair
        })

        const couples = [...objectArray, ...pairObject]

        const shuffledArray = randonCouplesPosition(couples)

        setCoupleArray(shuffledArray)
    }

    function randonCouplesPosition(couples: PieceProps[]) {

        const shuffledArray = [...couples]

        shuffledArray.sort(() => Math.random() - 0.5)

        return shuffledArray
    }

    useEffect(() => {

        const array = generateCouples()

        generateGame(array)
    }, [])

    return (
        <div
            className="min-h-screen flex flex-col justify-between bg-background-image"
        >
            <header
                className="w-full flex p-2 items-center justify-between relative"
            >
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => push("/")}
                    className="border-none"
                >
                    <ArrowLeft />
                </Button>
                <Timer />
                <Card className="border-border p-2 text-2xl border-none">
                    Dificuldade:
                    <span className="ml-2 capitalize">
                        {/* {
                            difficulty === "easy"
                                ? "fácil"
                                : difficulty === "hard"
                                    ? "difícil"
                                    : "medio"
                        } */}
                    </span>
                </Card>
            </header>
            <main
                className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center mt-4"
            >
                <Card className={twMerge(
                    "grid gap-3 p-2 justify-center place-items-center",
                    difficulty === "easy"
                        ? "grid-cols-2 w-1/3"
                        : difficulty === "mid"
                            ? "grid-cols-4 w-5/12"
                            : "grid-cols-8 w-11/12"
                )}>
                    <CardPiece coupleArray={coupleArray} />
                </Card>
            </main>
        </div>
    )
}
