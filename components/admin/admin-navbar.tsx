import Link from "next/link"
import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminNavbar() {
  return (
    <div className="bg-[#2C1810] text-white mb-6 rounded-lg shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-amber-400" />
          <span className="font-bold">Brew Haven Admin</span>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-white hover:text-amber-300 hover:bg-white/10">
            <Link href="/">View Website</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
