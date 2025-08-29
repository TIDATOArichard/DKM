import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || (process.env.SMTP_USER ?? 'no-reply@example.com'),
      to: 'tidatoar@gmail.com',
      subject: subject || `Message de ${name || email}`,
      text: `${name ? `Nom: ${name}\n` : ''}${email ? `Email: ${email}\n\n` : ''}${message || ''}`,
    } as any;

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('send-email error', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
