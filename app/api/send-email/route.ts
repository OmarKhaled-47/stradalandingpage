import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, email, additionalInfo } =
      await request.json();

    const data = await resend.emails.send({
      from: "Strada Properties <onboarding@resend.dev>",
      to: ["mido94926@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="text-align: center; color: #333;">New Contact Form Submission</h2>
          <p style="font-size: 16px; color: #555;">
            You have received a new contact form submission. Below are the details:
          </p>
          <hr style="border-top: 1px solid #ddd; margin: 20px 0;">
          <table style="width: 100%; font-size: 16px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Additional Information:</strong></td>
              <td style="padding: 8px;">${additionalInfo}</td>
            </tr>
          </table>
          <hr style="border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 14px; color: #888; text-align: center;">
            Strada Properties | <a href="mailto:Contact@strada-properties.com" style="color: #007bff; text-decoration: none;">Contact@strada-properties.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
