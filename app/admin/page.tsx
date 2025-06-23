import { getReservations } from "@/app/actions/reservation-actions"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const { success, data: reservations } = await getReservations()

  return (
    <div className="min-h-screen bg-[#FFFAF5] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-8">Reservation Management</h1>

        {success ? (
          <AdminDashboard initialReservations={reservations} />
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Reservations</h3>
            <p className="text-red-700">
              There was a problem loading the reservation data. Please try refreshing the page.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
