import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simple middleware to protect the admin route
// In a real application, you would implement proper authentication
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for the admin route
  if (pathname.startsWith("/admin")) {
    // For demo purposes, we're using a simple query parameter as "authentication"
    // In a real app, you would check for a valid session/token
    const isAuthenticated = request.nextUrl.searchParams.has("access")

    if (!isAuthenticated) {
      // Redirect to a login page or show an error
      // For this demo, we'll just add the access parameter
      const url = request.nextUrl.clone()
      url.searchParams.set("access", "demo")
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
