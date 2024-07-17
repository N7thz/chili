import { LucideProps } from "lucide-react"
import {
    Dispatch, ForwardRefExoticComponent, RefAttributes, SetStateAction
} from "react"

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

export interface CardPieceProps {
    coupleArray: PieceProps[]
}

export interface CardFlipProps {
    firstItem: PieceProps | null
    setFirstItem: Dispatch<SetStateAction<PieceProps | null>>
    secondItem: PieceProps | null
    setSecondItem: Dispatch<SetStateAction<PieceProps | null>>
    array: PieceProps[]
    setArray: Dispatch<SetStateAction<PieceProps[]>>
    errorCouple: boolean
    setErrorCouple: Dispatch<SetStateAction<boolean>>
    couple: PieceProps
    index: number
}