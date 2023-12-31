import "./globals.css"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { getServerSession } from "next-auth"
import { Ubuntu } from "next/font/google"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Header } from "@/components/Header"
import { Login } from "@/components/Login"

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const colorScheme = headersList.get("sec-ch-prefers-color-scheme")

  return {
    title: "Log",
    description: "Log your life.",
    manifest: "/manifest.json",
    themeColor: colorScheme === "dark" ? "#0f172a" : "#ffffff",
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header session={session} />
        {session ? children : <Login />}
      </body>
    </html>
  )
}
