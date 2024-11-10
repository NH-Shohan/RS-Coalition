import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, source, budget, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rscoalition.info@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Source</strong></td>
            <td>${source || "Not specified"}</td>
          </tr>
          <tr>
            <td><strong>Budget</strong></td>
            <td>${budget || "Not specified"}</td>
          </tr>
          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully! We'll get back to you!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email: " + error.message },
      { status: 500 }
    );
  }
}
