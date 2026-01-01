import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const result = await resend.emails.send({
      from: "Test Sender <noreply@YOUR_VERIFIED_DOMAIN.com>",
      to: ["iamfunnycoolepic@gmail.com"],
      subject: "Resend Test Email ✅",
      html: `
        <h2>It works 🎉</h2>
        <p>Your Resend + Node.js setup is correct.</p>
        <p>This email was sent successfully.</p>
      `,
    });

    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

sendTestEmail();
