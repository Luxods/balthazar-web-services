import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation simple
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' }, 
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Utilise le domaine de test de Resend par défaut
      to: [process.env.MY_EMAIL as string], // L'email où TU reçois le message
      subject: `Nouveau message de ${name} (Portfolio)`,
      replyTo: email, // Pour répondre directement au client en cliquant sur "Répondre"
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}