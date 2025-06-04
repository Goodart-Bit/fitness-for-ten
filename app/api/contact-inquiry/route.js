import { mail } from "../mailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method !== "POST") {
    console.log(req.method)
    return res.status(405).json({ message: "Only POST Allowed" });
  }
  const formData = await req.formData();
  let fields = null;
  switch(formData.get('type')){
    case 'contact':
      fields = {
        name: formData.get('name'),
        email: formData.get('email'),
        topic: formData.get('topic'),
        message: formData.get('message'),
      };
      contactMail(fields);
      break;
    case 'donation':
      fields = {
        name: formData.get('name'),
        email: formData.get('email'),
        donation: formData.get('donation'),
        message: formData.get('message'),
      };
      donationMail(fields);
      break;
    case 'jobApplication':
      fields = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
      const file = formData.get('letter');
      const buffer = Buffer.from(await file.arrayBuffer());
      const attachment = { filename: file.name, content: buffer, contentType: file.type}
      jobAppMail(fields, attachment);
  }
  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
}

function contactMail(json) {
  const { name, email, topic, message } = json;
  mail(email, `New inquiry from ${name} - ${topic}`, `Customer email: ${email}\n${message}`)
}

function donationMail(json) {
  const { name, email, donation, message } = json;
  console.log(donation);
  mail(email, `Donation: ${name} wants to make a contribution`, `Customer email: ${email}\nIs member: ${donation === 'on' ? 'yes' : 'no'}\n${message}`)
}

function jobAppMail(json, letter){
  const { name, email, message } = json;
  mail(email, `New job application from ${name}`, `Customer email: ${email}\n${message}`, letter)
}