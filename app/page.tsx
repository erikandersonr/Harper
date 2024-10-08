import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 bg-background">
      <Link href="/dashboard">
        <Button variant="outline">Go to Dashboard</Button>
      </Link>
    </div>
  )
}