import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const {
      from,
      subject,
      message,
      attachments,
    } = req.body;

    if (!from || !message) {
      return res.status(400).json({
        success: false,
        error: 'From and message are required',
      });
    }

    const email = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['perdanakurniawan25@gmail.com'],
      replyTo: from,
      subject: subject || '❤️ Personal Note',
      text: message,

      attachments:
        Array.isArray(attachments) && attachments.length > 0
          ? attachments.map((attachment) => ({
              filename: attachment.filename,
              content: attachment.content,
            }))
          : undefined,
    });

    if (email.error) {
      console.error('Resend error:', email.error);

      return res.status(400).json({
        success: false,
        error: email.error.message || 'Resend failed to send email',
      });
    }

    return res.status(200).json({
      success: true,
      id: email.data?.id,
    });

  } catch (error) {
    console.error('Resend error:', error);

    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
}