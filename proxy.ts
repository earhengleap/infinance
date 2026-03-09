import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/',
])

export const proxy = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  return NextResponse.next();
})
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};