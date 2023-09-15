import { getLogs } from "@/actions/log"
import { Login } from "./components/login"

export default async function Home() {
  const data = await getLogs()

  console.log(data)

  return (
    <main>
      <Login />
    </main>
  )
}
