import { useState } from "react"
import { CardPieceProps, PieceProps } from "@/@types"
import { CardFlip } from "./card-flip-copy"

export const CardPiece = ({ coupleArray }: CardPieceProps) => {

    const [firstItem, setFirstItem] = useState<PieceProps | null>(null)
    const [secondItem, setSecondItem] = useState<PieceProps | null>(null)
    const [errorCouple, setErrorCouple] = useState<boolean>(false)
    const [array, setArray] = useState<PieceProps[]>([])

    return (
        <>
            {
                coupleArray.map((couple, i) => {

                    const { id } = couple

                    return (
                        <CardFlip
                            key={id}
                            firstItem={firstItem}
                            setFirstItem={setFirstItem}
                            secondItem={secondItem}
                            setSecondItem={setSecondItem}
                            errorCouple={errorCouple}
                            array={array}
                            setArray={setArray}
                            setErrorCouple={setErrorCouple}
                            couple={couple}
                            index={i}
                        />
                    )
                })
            }
        </>

    )
}
