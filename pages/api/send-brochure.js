// pages/api/send-brochure.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, phone, project } = req.body;

  // Basic validation
  if (!name || !email || !phone || !project)
    return res.status(400).json({ message: "All fields are required." });

  try {
    // Send email asynchronously
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    transporter.sendMail({
      from: `"${project} Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Brochure Download Request - ${project}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}\nDate: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
    });

    // Respond immediately to frontend
    res.status(200).json({ message: "Download starting..." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
