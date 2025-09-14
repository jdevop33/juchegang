import HomeClient from "./home-client"
import { laws } from "@/data/laws"

export const dynamic = "force-static"

export default async function Home() {
  // Compute/prepare data on the server; send only what's needed to the client.
  return <HomeClient laws={laws} />
}
