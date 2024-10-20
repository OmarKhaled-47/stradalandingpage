// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!); // Make sure to set this in your environment variables

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await sendgrid.send({
        to: email, // recipient email address
        from: "support@strada.com", // your verified sender email
        subject: "Subscription Confirmation",
        text: "Thank you for subscribing to our newsletter!",
      });

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default sendEmail;
