"use client"

import { setCookie } from "cookies-next"
import { uuid as randomID } from 'uuidv4'
import {
    Bird, Bone, Bug, Cat, Dog, PawPrint, Apple, Banana, Beef, Beer, Carrot, Cookie, Croissant, CupSoda, Drumstick, Egg, Ham, IceCreamCone, Martini, Pizza, Popcorn, Popsicle, Utensils, Crown, Dice6, Flame, FlaskConical, Gamepad, Ghost, Gift, Headphones, Heart,
    LucideProps,
    ArrowLeft
} from "lucide-react"
import {
    ForwardRefExoticComponent, RefAttributes, useEffect, useState
} from "react"
import { Card } from "./ui/card"
import { twMerge } from "tailwind-merge"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useDifficulty } from "@/context/difficulty-context"
import { CardPiece } from "./card-piece"

export interface Couple {
    object: PieceProps
    pair: PieceProps
}

export interface PieceProps {
    id: string,
    Icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
}

export const Game = () => {

    const [coupleArray, setCoupleArray] = useState<PieceProps[]>([])

    const { difficulty, setDifficulty } = useDifficulty()
    const { push } = useRouter()

    if (difficulty === undefined) {
        setDifficulty("mid")
        setCookie("difficulty", "mid")
    }

    function generateCouples() {

        const pieces = [
            Bird, Bone, Bug, Cat,
            Dog, PawPrint, Apple, Banana,
            Beef, Beer, Carrot, Cookie,
            Croissant, CupSoda, Drumstick, Egg,
            Ham, IceCreamCone, Martini, Pizza,
            Popcorn, Popsicle, Utensils, Crown,
            Dice6, Flame, FlaskConical, Gamepad,
            Ghost, Gift, Headphones, Heart
        ]

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

            const intervalObject = pieces.map(piece => {

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
        <div className="min-h-screen flex flex-col justify-between">
            <header className="w-full p-4 flex">
                <div className="w-1/2 flex justify-between items-center">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => push("/")}
                    >
                        <ArrowLeft />
                    </Button>
                    <Card className="border-border p-2 text-2xl">
                        0:00
                    </Card>
                </div>
            </header>
            <main
                className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center"
            >
                <Card className={twMerge(
                    "min-h-1/2 grid  gap-3 border-none",
                    difficulty === "easy"
                        ? "grid-cols-2"
                        : difficulty === "mid"
                            ? "grid-cols-4"
                            : "grid-cols-8"
                )}>
                    <CardPiece coupleArray={coupleArray} />
                </Card>
            </main>
        </div>
    )
}
