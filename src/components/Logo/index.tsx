import { Newspaper } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      className="text-white text-xl leading-none flex items-center"
      scroll={false}
    >
      <Newspaper size="20" strokeWidth="2" className="text-indigo-400 mr-1" />{" "}
      Log
    </Link>
  )
}
