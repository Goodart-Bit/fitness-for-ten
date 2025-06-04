import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function mail(source, subject, message, file){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: source,
        to: process.env.MAIL_USER,
        subject: subject,
        text: message,
        attachments: file ? [{
            filename: file.filename,
            content: file.content,
            contentType: file.contentType,
        }] : undefined
      });
}