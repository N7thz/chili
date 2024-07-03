import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div
      className="min-h-screen bg-background-image bg-no-repeat bg-cover w-full flex justify-start"
    >
      <div
        className="bg-background w-1/3 flex flex-col justify-between"
      >
        <Card
          className="w-full h-full flex flex-col justify-between border-none"
        >
          <CardHeader>
            <CardTitle>Memory Game</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Link href={"/game"}>
              <Button className="w-full">
                Jogar
              </Button>
            </Link>
            <Link href={"/options"}>
              <Button className="w-full">
                Opções
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
