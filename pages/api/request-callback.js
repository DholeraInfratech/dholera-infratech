// pages/api/request-callback.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).json({ message: 'Name must be at least 3 characters long.' });
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Invalid phone number.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dholera Callback" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Callback Request',
      text: `Name: ${name}\nPhone: ${phone}\nRequested at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    });

    return res.status(200).json({ message: 'Callback request sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Error sending email.' });
  }
}
