import Link from "next/link"
import { Card } from "../ui/card"

export default function SettingsNav() {
  return (
    <Card>
      <nav className="grid p-6 gap-2 text-md text-muted-foreground">
        <Link href="#" className="font-semibold text-primary">
          General
        </Link>
        <Link href="#">Security</Link>
        <Link href="#">Integrations</Link>
        <Link href="#">Support</Link>
        <Link href="#">Organizations</Link>
        <Link href="#">Advanced</Link>
      </nav>
    </Card>
  )
}
