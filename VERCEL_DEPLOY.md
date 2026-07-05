# Vercel Deploy Rehberi

## Adım 1: GitHub'a Push Edin

```bash
cd C:\Users\kayac\veloradx\web\velora_web2
git add .
git commit -m "Initial commit: VeloraDX website"
git remote add origin https://github.com/YOUR_USERNAME/velora-web.git
git branch -M main
git push -u origin main
```

## Adım 2: Vercel'de Proje Oluşturun

1. [Vercel Dashboard](https://vercel.com) açın
2. **Add New Project** → **Import Git Repository**
3. GitHub repository'nizi seçin
4. **Framework Preset**: Next.js
5. **Root Directory**: `./web`
6. **Environment Variables** ekleyin:
   - `NEXT_PUBLIC_API_URL` = Backend API URL (örn: `https://api.yourdomain.com/api`)

## Adım 3: Backend API URL Ayarları

Production'da backend URL'ini güncelleyin:
- **Development**: `http://localhost:5000/api`
- **Production**: `https://your-api-domain.com/api`

## Vercel Build Ayarları

- **Build Command**: `cd web && npm install && npm run build`
- **Install Command**: `cd web && npm install`
- **Output Directory**: `web/.next`
- **Node Version**: 20.x

## Adım 4: Deploy!

Vercel otomatik olarak:
1. Repository'nizi izleyecek
2. Her push'ta otomatik build + deploy yapacak
3. Preview links oluşturacak
4. Production'a otomatik merge işlemi yapacak

## Custom Domain Ayarı

1. Vercel Dashboard → Project Settings → Domains
2. Custom domain ekleyin
3. DNS records'ı güncellleyin

## Environment Variables Güncelle

Her environment için farklı API URL'ler:
- Preview: `https://preview-api.yourdomain.com/api`
- Production: `https://api.yourdomain.com/api`

---

**Not**: Backend (ASP.NET Core API) için ayrı bir hosting (Azure, AWS, Railway, vb.) gereklidir.
