import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const {
      from,
      subject,
      message,
      attachment,
    } = req.body;

    if (!from || !message) {
      return res.status(400).json({
        error: 'From and message are required',
      });
    }

    const email = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['perdanakurniawan25@gmail.com'],
      replyTo: from,
      subject: subject || '❤️ Personal Note',
      text: message,
      attachments: attachment
        ? [
            {
              filename: attachment.filename,
              content: attachment.content,
            },
          ]
        : undefined,
    });

    return res.status(200).json({
      success: true,
      id: email.data?.id,
    });
  } catch (error) {
    console.error('Resend error:', error);

    return res.status(500).json({
      error: 'Failed to send email',
    });
  }
}