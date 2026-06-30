import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { vorname, nachname, email, telefon, leistung, nachricht } = body

    if (!vorname || !email || !nachricht) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.verify()

    const mailHtml = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f5f0e8; margin: 0; padding: 0; }
  .wrap { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; }
  .hdr { background: #1C3A2B; padding: 32px 40px; }
  .hdr h1 { color: #fff; font-size: 22px; margin: 0; }
  .hdr span { color: #8FAF7E; }
  .body { padding: 36px 40px; }
  .row { margin-bottom: 20px; }
  .lbl { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #5A6355; margin-bottom: 4px; }
  .val { font-size: 15px; color: #141414; }
  .msg { background: #f5f0e8; border-radius: 10px; padding: 16px; font-size: 15px; color: #141414; line-height: 1.7; white-space: pre-wrap; }
  .ftr { background: #1C3A2B; padding: 20px 40px; text-align: center; }
  .ftr p { color: rgba(255,255,255,0.45); font-size: 12px; margin: 0; }
</style></head>
<body>
<div class="wrap">
  <div class="hdr"><h1>Traum<span>Garten</span>service — Neue Anfrage</h1></div>
  <div class="body">
    <div class="row"><div class="lbl">Name</div><div class="val">${vorname} ${nachname}</div></div>
    <div class="row"><div class="lbl">E-Mail</div><div class="val"><a href="mailto:${email}">${email}</a></div></div>
    ${telefon ? `<div class="row"><div class="lbl">Telefon</div><div class="val">${telefon}</div></div>` : ''}
    ${leistung ? `<div class="row"><div class="lbl">Gewünschte Leistung</div><div class="val">${leistung}</div></div>` : ''}
    <div class="row"><div class="lbl">Nachricht</div><div class="msg">${nachricht}</div></div>
  </div>
  <div class="ftr"><p>Gesendet über das Kontaktformular auf traumgartenservice.at</p></div>
</div>
</body></html>`

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage von ${vorname} ${nachname}${leistung ? ` – ${leistung}` : ''}`,
      html: mailHtml,
      text: `Neue Anfrage\n\nName: ${vorname} ${nachname}\nE-Mail: ${email}\n${telefon ? `Telefon: ${telefon}\n` : ''}${leistung ? `Leistung: ${leistung}\n` : ''}\nNachricht:\n${nachricht}`,
    })

    // Bestätigung an den Absender
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: 'Ihre Anfrage bei TraumGartenservice',
      html: `
<!DOCTYPE html>
<html lang="de"><head><meta charset="UTF-8"><style>
  body{font-family:Arial,sans-serif;background:#f5f0e8;margin:0;padding:0;}
  .wrap{max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;}
  .hdr{background:#1C3A2B;padding:32px 40px;}
  .hdr h1{color:#fff;font-size:20px;margin:0;}
  .hdr span{color:#8FAF7E;}
  .body{padding:36px 40px;font-size:15px;color:#141414;line-height:1.75;}
  .ftr{background:#1C3A2B;padding:20px 40px;text-align:center;}
  .ftr p{color:rgba(255,255,255,0.45);font-size:12px;margin:0;}
</style></head>
<body>
<div class="wrap">
  <div class="hdr"><h1>Traum<span>Garten</span>service</h1></div>
  <div class="body">
    <p>Guten Tag ${vorname},</p>
    <p>vielen Dank für Ihre Anfrage! Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.</p>
    <p>Mit freundlichen Grüßen,<br><strong>Ihr TraumGartenservice-Team</strong><br>Wien, Österreich</p>
  </div>
  <div class="ftr"><p>© 2025 TraumGartenservice · Wien</p></div>
</div>
</body></html>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    const detail = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: `Fehler beim Senden. Bitte versuchen Sie es später erneut. (${detail})` }, { status: 500 })
  }
}
