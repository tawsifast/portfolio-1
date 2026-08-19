import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, projectType, message, honeypot } = await request.json();

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Tawsif Portfolio <onboarding@resend.dev>', // Use verified domain here in production
      to: ['tawsifislam0070@gmail.com'],
      replyTo: email,
      subject: `💬 New message from ${name} — Portfolio Contact`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <!-- Email -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
          <tr>
            <td style="padding:20px;background:rgba(56,189,248,0.06);border:1px solid rgba(56,189,248,0.15);border-radius:12px;">
              <p style="margin:0 0 6px;color:rgba(255,255,255,0.4);font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Reply To</p>
              <a href="mailto:${email}" style="margin:0;color:#8ed5ff;font-size:16px;font-weight:600;text-decoration:none;">${email}</a>
            </td>
          </tr>
        </table>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
