"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Check, X, Trash2, RefreshCw } from "lucide-react"
import { updateReservationStatus, deleteReservation } from "@/app/actions/reservation-actions"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { AdminNavbar } from "./admin-navbar"

type Reservation = {
  id: number
  name: string
  email: string
  phone: string
  reservation_date: string
  reservation_time: string
  guests: number
  message: string | null
  status: string
  created_at: string
}

type AdminDashboardProps = {
  initialReservations: Reservation[]
}

export function AdminDashboard({ initialReservations }: AdminDashboardProps) {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations)
  const [isLoading, setIsLoading] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null)

  const refreshReservations = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/reservations")
      const data = await response.json()
      if (data.success) {
        setReservations(data.data)
      }
    } catch (error) {
      console.error("Error refreshing reservations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStatusChange = async (id: number, status: string) => {
    setIsLoading(true)
    try {
      const result = await updateReservationStatus(id, status)
      if (result.success) {
        setReservations(reservations.map((res) => (res.id === id ? { ...res, status } : res)))
      }
    } catch (error) {
      console.error("Error updating status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteClick = (reservation: Reservation) => {
    setSelectedReservation(reservation)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!selectedReservation) return

    setIsLoading(true)
    try {
      const result = await deleteReservation(selectedReservation.id)
      if (result.success) {
        setReservations(reservations.filter((res) => res.id !== selectedReservation.id))
        setDeleteDialogOpen(false)
      }
    } catch (error) {
      console.error("Error deleting reservation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>
    }
  }

  return (
    <div>
      <AdminNavbar />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-[#2C1810]">Reservations</h2>
          <Button
            variant="outline"
            onClick={refreshReservations}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No reservations found
                  </TableCell>
                </TableRow>
              ) : (
                reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell className="font-medium">{reservation.name}</TableCell>
                    <TableCell>
                      {format(new Date(reservation.reservation_date), "MMM d, yyyy")}
                      <br />
                      <span className="text-gray-500">{reservation.reservation_time}</span>
                    </TableCell>
                    <TableCell>{reservation.guests}</TableCell>
                    <TableCell>
                      {reservation.email}
                      <br />
                      <span className="text-gray-500">{reservation.phone}</span>
                    </TableCell>
                    <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {reservation.status !== "confirmed" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-green-600"
                            onClick={() => handleStatusChange(reservation.id, "confirmed")}
                            disabled={isLoading}
                          >
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Confirm</span>
                          </Button>
                        )}
                        {reservation.status !== "cancelled" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 text-red-600"
                            onClick={() => handleStatusChange(reservation.id, "cancelled")}
                            disabled={isLoading}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Cancel</span>
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 text-gray-600"
                          onClick={() => handleDeleteClick(reservation)}
                          disabled={isLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the reservation for {selectedReservation?.name}? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={isLoading}>
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
