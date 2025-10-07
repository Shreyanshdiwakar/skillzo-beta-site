"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_SECRET_KEY);
export async function subscribeToNewsletter(email: string) {
  try {
    // Send email notification
    if(process.env.NODE_ENV === "production" && process.env.RESEND_SECRET_KEY) {
      await resend.emails.send({
        from: "New Newsletter Sign up <skillzo@anayparaswani.dev>",
        to: ["adarsh@skillzo.co"],
        cc: ["me@anayparaswani.dev"],
        subject: "New Newsletter signup",
        text: `Dear Adarsh, \n We've noticed a new newsletter signup from ${email}. \n If you've any queries, please don't hesitate to contact Anay at me@anayparaswani.dev \n Thanks & Regards, \n Automated email from website`
      });
    }
    
    // For now, always return success since we don't have database integration
    // TODO: Add database integration later
    return { success: true, message: "You have successfully subscribed!" };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
