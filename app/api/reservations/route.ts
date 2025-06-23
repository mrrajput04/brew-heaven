import { NextResponse } from "next/server"
import { getReservations } from "@/app/actions/reservation-actions"

export async function GET() {
  const result = await getReservations()

  if (result.success) {
    return NextResponse.json({ success: true, data: result.data })
  } else {
    return NextResponse.json({ success: false, message: result.message }, { status: 500 })
  }
}
