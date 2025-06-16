import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!nameRegex.test(name)) {
    return res.status(400).json({ message: 'Invalid name. Must contain only letters and be at least 3 characters long.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Invalid phone number. Must be 10 digits.' });
  }

  if (!message || message.length < 5) {
    return res.status(400).json({ message: 'Message should be at least 5 characters long.' });
  }

  const mailContent = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to admin (you)
    await transporter.sendMail({
      from: `"Dholera Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: mailContent,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Dholera Gujarat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for contacting us!',
      text: `Hi ${name},\n\nThank you for reaching out! We’ve received your message and will get back to you shortly.\n\nYour message:\n"${message}"\n\nRegards,\nDholera Gujarat Team`,
    });

    return res.status(200).json({ message: 'Your message has been sent successfully! Check your email for confirmation.' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Internal server error. Could not send your message.' });
  }
}
