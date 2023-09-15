import { getLogs } from "@/actions/log"

export default async function Home() {
  const data = await getLogs()

  return (
    <main>
      {data.map((log) => (
        <div key={log.id}>
          <h2>{log.title}</h2>
          <p>{log.description}</p>
        </div>
      ))}
    </main>
  )
}
