import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email service error:', error)
  } else {
    console.log('Email service is ready to take messages')
  }
})

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
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
      subject: `Seyfo - Yeni İletişim Mesajı: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #dc0005;">Yeni İletişim Mesajı</h2>
          <hr style="border: none; border-top: 1px solid #ddd;">
          
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
          <p><strong>Şirket Adı:</strong> ${company || 'Belirtilmedi'}</p>
          
          <h3>Mesaj:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${message}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Bu mesaj Seyfo web sitesinin iletişim formundan gönderilmiştir.
          </p>
        </div>
      `
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Mesajınız alındı - Seyfo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #dc0005;">Mesajınız Alındı</h2>
          
          <p>Merhaba ${name},</p>
          
          <p>Seyfo'ya iletişim kurduğunuz için teşekkür ederiz. Mesajınız başarıyla alınmıştır.</p>
          
          <p>Satış ekibimiz mesajınızı inceledikten sonra en kısa sürede sizinle iletişime geçecektir.</p>
          
          <p>Sorularınız veya ek bilgiye ihtiyacınız olduğunda bize yazabilirsiniz.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd;">
          
          <p style="color: #666;">
            <strong>İletişim Bilgileri:</strong><br>
            E-posta: iletisim@cfoseyfo.com<br>
            Web: https://www.seyfo.com
          </p>
          
          <p style="color: #999; font-size: 12px;">
            Bu bir otomatik yanıt e-postasıdır. Lütfen cevap vermeyin.
          </p>
        </div>
      `
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    res.status(200).json({ 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi. Kısa sürede sizinle iletişime geçeceğiz.' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ 
      error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      details: error.message 
    })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
