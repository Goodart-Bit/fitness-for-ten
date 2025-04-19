import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log(req);   
  if (req.method !== "POST") {
    console.log(req.method)
    return res.status(405).json({ message: "Only POST Allowed" });
  }

  const { name, email, topic, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.MAIL_USER,
    subject: `New inquiry from ${name} - ${topic}`,
    text: `customer email: ${email}\n${message}`,
  });

  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
}
