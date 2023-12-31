import { Session } from "next-auth"
import { Logo } from "../Logo"
import { Menu } from "./Menu"

interface Props {
  session: Session | null
}

export async function Header({ session }: Props) {
  return (
    <header
      className="p-4 flex h-64 bg-cover bg-center items-start justify-between"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Logo />

      {session && <Menu session={session} />}
    </header>
  )
}
