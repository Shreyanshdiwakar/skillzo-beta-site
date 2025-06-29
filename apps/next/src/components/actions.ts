"use server";
import prisma  from "@/lib/db";

export async function subscribeToNewsletter(email: string) {
  // Check if already subscribed
  const existing = await prisma.newsletter.findUnique({ where: { email } });
  if (existing) {
    return { success: false, message: "You are already subscribed to the newsletter." };
  }
  await prisma.newsletter.create({ data: { email } });
  return { success: true, message: "You have successfully subscribed!" };
}
  