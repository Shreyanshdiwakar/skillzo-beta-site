"use server";
import prisma from "@skillzo/db";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_SECRET_KEY);
export async function subscribeToNewsletter(email: string) {
  // Check if already subscribed
  await resend.emails.send({
    from: "New Newsletter Sign up   <skillzo@anayparaswani.dev>",
    to: ["adarsh@skillzo.co"],
    cc: ["me@anayparaswani.dev"],
    subject: "New Newsletter signup",
    text: `Dear Adarsh, \n We've noticed a new newsletter signup from ${email}. \n If you've any queries, please don't hesitate to contact Anay at me@anayparaswani.dev \n Thanks & Regards, \n Automated email from website`
  })
  const existing = await prisma.newsletter.findUnique({ where: { email } });
  if (existing) {
    // return { success: false, message: "You are already subscribed to the newsletter." };
  }
  if (!existing){
    await prisma.newsletter.create({ data: { email } });
  }
  return { success: true, message: "You have successfully subscribed!" };
}
