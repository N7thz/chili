"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { DifficultyButton } from "./difficulty-button"

export const Options = () => {

    const { push } = useRouter()

    return (
        <div
            className="min-h-screen bg-background-image flex items-center justify-center"
        >
            <Card className="w-1/3 space-y-5">
                <CardHeader>
                    <CardTitle>
                        Opções
                    </CardTitle>
                </CardHeader>
                <CardContent
                    className="w-full flex flex-col items-center gap-4"
                >
                    <div className="w-full flex justify-end gap-3">
                        <Button
                            variant="outline"
                            className="w-full"
                            title="voltar"
                            onClick={() => push("/")}
                        >
                            <ArrowLeft />
                        </Button>
                        <ModeToggle />
                    </div>
                    <div className="w-full flex justify-between gap-3">
                        <DifficultyButton />
                        <Button
                            variant={"outline"}
                            className="w-11/12"
                        >
                            Cores
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}
