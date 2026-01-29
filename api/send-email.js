import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Ad, e-posta ve mesaj zorunludur.' })
  }

  try {
    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Yeni İletişim Formu - ' + name,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Verilmemiş'}</p>
        <p><strong>Şirket:</strong> ${company || 'Verilmemiş'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Confirmation email to user
    const userMailOptions = {
      from: 'Seyfo <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: 'Mesajınız Alındı',
      html: `
        <h2>Merhabalar ${name},</h2>
        <p>Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
        <p>Teşekkürler,<br>Seyfo Ekibi</p>

        <div style="margin-top:16px; padding-top:12px; border-top:1px solid #eaeaea; font-family: Arial, Helvetica, sans-serif;">
  <div style="font-size:14px; font-weight:bold; color:#333333;">
    Seyfo
  </div>

  <div style="font-size:13px; color:#555555; margin-top:4px;">
    AI destekli CFO Asistanı | KOBİ’ler için Finansal Yönetim
  </div>

  <div style="font-size:13px; color:#E7000B; margin-top:8px;">
    📊 Nakit Akışı • Harcama Analizi • Finansal Öngörü
  </div>

  <div style="font-size:13px; color:#555555; margin-top:10px;">
    🌐 <a href="https://www.cfoseyfo.com" style="color:#E7000B; text-decoration:none;">www.cfoseyfo.com</a>
    &nbsp;|&nbsp;
    ✉️ <a href="mailto:iletisim@cfoseyfo.com" style="color:#E7000B; text-decoration:none;">iletisim@cfoseyfo.com</a>
  </div>

  <div style="font-size:11px; color:#999999; margin-top:12px; max-width:480px;">
    Bu e-posta ve ekleri gizli bilgi içerebilir. Yanlışlıkla aldıysanız lütfen göndereni bilgilendiriniz ve e-postayı siliniz.
  </div>
</div>

      `
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return res.status(200).json({ message: 'Mesaj başarıyla gönderildi!' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' })
  }
}
