"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { Log } from "@prisma/client"
import { getServerSession } from "next-auth"

export async function getLogs(): Promise<Log[]> {
  const session = await getServerSession(authOptions)

  if (!session) {
    throw new Error("Not logged in")
  }
  const data = await prisma.log.findMany({
    where: {
      userId: session.user.id,
    },
  })

  return data
}
