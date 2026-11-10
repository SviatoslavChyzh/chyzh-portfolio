import { NextResponse } from 'next/server';
import { createContactSchema } from '@/lib/contact';

const contactSchema = createContactSchema();

/** The values end up in an HTML email, so they must not be able to inject markup. */
function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
  }

  const { username, email, subject, message } = parsed.data;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sviatoslavchyzh.dev',
        to: process.env.EMAIL_ADDRESS,
        reply_to: email,
        subject: subject || `Portfolio message from ${username}`,
        html: `
          <div>
            <h1>Email From Portfolio</h1>
            <p>From: ${escapeHtml(username)} (${escapeHtml(email)})</p>
            <p style="white-space: pre-wrap">Message: ${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Resend API error:', response.status, await response.text());
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resend API error:', error);
    return NextResponse.json({ error: 'send_failed' }, { status: 500 });
  }
}
