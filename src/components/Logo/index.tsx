import { Newspaper } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      className="text-white text-xl leading-none flex items-center"
      scroll={false}
    >
      <span className="bg-indigo-400 rounded-full p-2 mr-2">
        <Newspaper size="16" strokeWidth="2" />
      </span>{" "}
      Log
    </Link>
  )
}
