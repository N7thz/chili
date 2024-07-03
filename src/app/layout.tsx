import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/theme-provider"
import { DifficultyProvider } from "@/context/difficulty-context"
import "./globals.css"

const jetBrains = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chili | memory game",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className="min-h-screen overflow-hidden"
    >
      <body className={jetBrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <DifficultyProvider>
            {children}
          </DifficultyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
