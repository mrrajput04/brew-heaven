"use server"

import { neon } from "@neondatabase/serverless"
import { format } from "date-fns"
import { z } from "zod"

// Initialize the Neon SQL client
const sql = neon(process.env.DATABASE_URL)

// Define the reservation schema
const reservationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  guests: z.string({ required_error: "Please select number of guests" }),
  message: z.string().optional(),
})

export type ReservationFormData = z.infer<typeof reservationSchema>

export async function createReservation(formData: ReservationFormData) {
  try {
    // Validate the form data
    const validatedData = reservationSchema.parse(formData)

    // Format the date for database storage
    const formattedDate = format(validatedData.date, "yyyy-MM-dd")

    // Insert the reservation into the database
    await sql`
      INSERT INTO reservations (
        name, 
        email, 
        phone, 
        reservation_date, 
        reservation_time, 
        guests, 
        message
      ) VALUES (
        ${validatedData.name}, 
        ${validatedData.email}, 
        ${validatedData.phone}, 
        ${formattedDate}, 
        ${validatedData.time}, 
        ${Number.parseInt(validatedData.guests)}, 
        ${validatedData.message || ""}
      )
    `

    // Also submit to Formspree as a backup if URL is provided
    if (process.env.NEXT_PUBLIC_FORMSPREE_URL) {
      const formspreeData = new FormData()
      Object.entries(validatedData).forEach(([key, value]) => {
        if (key === "date") {
          formspreeData.append(key, format(value as Date, "yyyy-MM-dd"))
        } else {
          formspreeData.append(key, value as string)
        }
      })

      await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: "POST",
        body: formspreeData,
        headers: {
          Accept: "application/json",
        },
      })
    }

    return { success: true, message: "Reservation submitted successfully!" }
  } catch (error) {
    console.error("Error creating reservation:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to create reservation",
    }
  }
}

export async function getReservations() {
  try {
    const reservations = await sql`
      SELECT * FROM reservations 
      ORDER BY reservation_date DESC, reservation_time DESC
    `
    return { success: true, data: reservations }
  } catch (error) {
    console.error("Error fetching reservations:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch reservations",
      data: [],
    }
  }
}

export async function updateReservationStatus(id: number, status: string) {
  try {
    await sql`
      UPDATE reservations 
      SET status = ${status} 
      WHERE id = ${id}
    `
    return { success: true, message: "Reservation status updated successfully!" }
  } catch (error) {
    console.error("Error updating reservation status:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to update reservation status",
    }
  }
}

export async function deleteReservation(id: number) {
  try {
    await sql`
      DELETE FROM reservations 
      WHERE id = ${id}
    `
    return { success: true, message: "Reservation deleted successfully!" }
  } catch (error) {
    console.error("Error deleting reservation:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete reservation",
    }
  }
}
