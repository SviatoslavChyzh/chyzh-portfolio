import { NextResponse } from 'next/server';
import type { ContactFormType } from '@/app/_components/ContactForm';

export const runtime = 'edge';

const emailAddr = process.env.EMAIL_ADDRESS;

export async function POST(request: Request) {
  try {
    const { username, email, message, subject } = (await request.json()) as ContactFormType;

    if (!username || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sviatoslavchyzh.dev',
        to: emailAddr,
        subject,
        html: `
              <div>
                <h1>Email From Portfolio</h1>
                <p>
                  Username: ${username} ${email}
                </p>
                <p>Message: ${message}</p>
             </div>
            `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Resend API Error:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
