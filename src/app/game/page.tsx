import { Game } from "@/components/game"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Chili | Home",
}

export default function Page() {

    return <Game />
}