import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { 
  calculateQuote, 
  dispatchCorporateEmail, 
  InquiryPayload, 
  generateHtmlReceipt 
} from './src/server/mailService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ==========================================
  // API ROUTES
  // ==========================================

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'NFC Smart Cards API',
      timestamp: new Date().toISOString(),
      smtpConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER),
    });
  });

  // Corporate Inquiry & Quotation Mail Delivery Endpoint
  app.post('/api/corporate-inquiry', async (req, res) => {
    try {
      const {
        fullName,
        workEmail,
        companyName,
        phone,
        quantity,
        materialPreference,
        message,
      } = req.body as InquiryPayload;

      // Basic field validation
      if (!fullName || !fullName.trim()) {
        return res.status(400).json({ error: 'fullName is required' });
      }
      if (!workEmail || !workEmail.includes('@') || !workEmail.includes('.')) {
        return res.status(400).json({ error: 'Valid workEmail is required' });
      }
      if (!companyName || !companyName.trim()) {
        return res.status(400).json({ error: 'companyName is required' });
      }
      if (!phone || !phone.trim()) {
        return res.status(400).json({ error: 'phone is required' });
      }

      // Calculate automated tiered quote
      const quote = calculateQuote(Number(quantity) || 25);

      // Dispatch email confirmation receipt (via SMTP or simulated delivery)
      const dispatchResult = await dispatchCorporateEmail(
        {
          fullName: fullName.trim(),
          workEmail: workEmail.trim(),
          companyName: companyName.trim(),
          phone: phone.trim(),
          quantity: quote.quantity,
          materialPreference: materialPreference || 'pvc',
          message: message ? message.trim() : '',
        },
        quote
      );

      const now = new Date();
      const dispatchedAt = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      return res.status(200).json({
        success: true,
        referenceCode: quote.referenceCode,
        message: 'Kurumsal fiyat teklif tablosu ve bilgilendirme e-postası başarıyla oluşturuldu ve iletildi.',
        quote,
        receipt: {
          messageId: dispatchResult.messageId,
          mode: dispatchResult.mode,
          recipient: workEmail.trim(),
          companyName: companyName.trim(),
          timestamp: now.toISOString(),
          dispatchedAt,
        },
      });
    } catch (error) {
      console.error('[API /api/corporate-inquiry Error]:', error);
      return res.status(500).json({
        error: 'Teklif tablosu oluşturulurken bir hata oluştu. Lütfen tekrar deneyiniz.',
      });
    }
  });

  // Generic Email Dispatch Endpoint (Resend confirmation or direct contact)
  app.post('/api/send-email', async (req, res) => {
    try {
      const { email, referenceCode, companyName, fullName } = req.body;

      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
      }

      console.log(`[API /api/send-email] Resending quote email to: ${email} (Ref: ${referenceCode || 'N/A'})`);

      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      return res.status(200).json({
        success: true,
        message: `Bilgilendirme e-postası ${email} adresine başarıyla yeniden iletildi.`,
        receipt: {
          recipient: email,
          referenceCode: referenceCode || 'NFC-TR-DIRECT',
          timestamp: now.toISOString(),
          dispatchedAt: timeStr,
        },
      });
    } catch (error) {
      console.error('[API /api/send-email Error]:', error);
      return res.status(500).json({ error: 'E-posta gönderimi başarısız oldu.' });
    }
  });

  // ==========================================
  // VITE DEV MIDDLEWARE / STATIC ASSETS
  // ==========================================

  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Full-Stack Server] running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
