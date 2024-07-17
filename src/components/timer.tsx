// Stopwatch.tsx

import React, { useState, useEffect } from "react"
import { Card } from "./ui/card"
import { useDifficulty } from "@/context/difficulty-context"

export const Timer = () => {

    const [time, setTime] = useState<number>(0)

    const { isRunning, setIsRunning } = useDifficulty()

    useEffect(() => {

        let interval: any

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [isRunning])

    const formatTime = (seconds: number): string => {

        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60

        const time = `${minutes
            .toString()
            .padStart(2, "0")}:${remainingSeconds
                .toString()
                .padStart(2, "0")
            }`

        return time
    }

    return (
        <Card
            className="absolute left-1/2 -translate-x-1/2 border-border p-2 text-2xl"
        >
            {formatTime(time)}
        </Card>
    )
}