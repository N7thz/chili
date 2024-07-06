import { PieceProps } from "./game"
import { CardFlip } from "./card-flip"

interface CardPieceProps {
    coupleArray: PieceProps[]
}

export const CardPiece = ({ coupleArray }: CardPieceProps) => {

    return (
        <>
            {
                coupleArray.map((couple, i) => {

                    const { id } = couple

                    return (
                        <CardFlip
                            key={id}
                            couple={couple}
                            index={i}
                        />
                    )
                })
            }
        </>

    )
}
