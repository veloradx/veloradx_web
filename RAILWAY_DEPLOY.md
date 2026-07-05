# Railway Monorepo Deployment Guide

## Proje Yapısı

```
velora_web2/
├── web/                 # Next.js Frontend
│   ├── Dockerfile
│   └── .dockerignore
├── api/                 # ASP.NET Core API
│   ├── Dockerfile
│   └── .dockerignore
└── railway.json
```

## Adım 1: Railway Dashboard'a Girin

1. [railway.app](https://railway.app) açın
2. GitHub ile giriş yapın
3. **New Project** → **Deploy from GitHub repo**

## Adım 2: Repository Seçin

- Repository: `veloradx/veloradx_web`
- Railway otomatik olarak Dockerfile'ları bulacak

## Adım 3: Services Oluşturun

Railway iki service oluşturacak:
- **web** (Next.js)
- **api** (ASP.NET Core)

### Web Service Konfigürasyonu

1. Service seç → **Settings**
2. **Build** kısmında:
   - **Dockerfile Path**: `web/Dockerfile`
   - **Build Context**: `.`
3. **Deploy** kısmında:
   - **Start Command**: (Railway otomatik handle eder)
   - **Port**: `3000`

### API Service Konfigürasyonu

1. Service seç → **Settings**
2. **Build** kısmında:
   - **Dockerfile Path**: `api/Dockerfile`
   - **Build Context**: `.`
3. **Deploy** kısmında:
   - **Port**: `5000`

## Adım 4: Environment Variables Ayarla

### Web Service Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api-service-url.up.railway.app/api
NODE_ENV=production
```

### API Service Environment Variables

```env
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=Server=mysql-service;Database=veloradx;Uid=root;Pwd=password;
ASPNETCORE_URLS=http://+:5000
```

## Adım 5: Database Service Ekle

1. Railway Dashboard → **New** → **Add Service** → **Database** → **MySQL**
2. MySQL service otomatik environment variables ekleyecek

## Adım 6: Deploy!

1. Her service'in yanındaki **Deploy** butonu
2. Railway otomatik build + push docker image'ı yapacak
3. Container'lar ayakta kalacak

## Production URLs

Deploy tamamlandıktan sonra:
- **Frontend**: `https://your-web-service.up.railway.app`
- **API**: `https://your-api-service.up.railway.app/api`

NEXT_PUBLIC_API_URL'i API service URL'i ile güncelle.

## Custom Domain

1. Service → **Settings** → **Domains**
2. Custom domain ekle
3. DNS CNAME record'u güncelle

## Environment Variables Referanss

Web'den API'ye erişim:
```typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
```

## Monitoring

Railway Dashboard'dan:
- Logs - real-time logs görmek
- Metrics - CPU, Memory, Network
- Deployments - deployment history

## Troubleshooting

### Web container crashes
- Logs'ı kontrol et
- Environment variables doğru mu?
- API_URL doğru mu?

### API connection errors
- MySQL service ayakta mı?
- Connection string doğru mu?
- Database migrated mi?

### Build fails
- Dockerfile syntax kontrol
- Dependencies installed mi?
- Build context doğru mu?
