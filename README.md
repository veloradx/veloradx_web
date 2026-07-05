# VeloraDX — Kurumsal Web Sitesi

ASP.NET Core 9 API + Next.js 15 Frontend + MySQL altyapısıyla kurulan profesyonel, SEO uyumlu kurumsal web sitesi template'i.

## Proje Yapısı

```
velora_web2/
├── api/                                    # ASP.NET Core 9 Web API
│   ├── VeloraDX.Domain/                    # Entities, domain logic
│   ├── VeloraDX.Application/               # DTOs, application services
│   ├── VeloraDX.Infrastructure/            # EF Core, DB context, repositories
│   ├── VeloraDX.Api/                       # Controllers, middleware, Program.cs
│   ├── VeloraDX.sln
│   ├── appsettings.json
│   └── .env.example
├── web/                                    # Next.js 15 Frontend
│   ├── app/                                # App router (pages, layout)
│   ├── components/                         # React components (shadcn/ui)
│   ├── lib/                                # API client, utilities
│   ├── types/                              # TypeScript interfaces
│   ├── package.json
│   └── .env.local
├── docker-compose.yml                      # MySQL for local dev
└── README.md
```

## Teknoloji Stack

**Backend:**
- ASP.NET Core 9
- Entity Framework Core 9 + Pomelo MySQL
- FluentValidation
- Swagger/OpenAPI
- Serilog (logging)
- Clean Architecture

**Frontend:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Hook Form + Zod
- ISR (Incremental Static Regeneration)

**Database:**
- MySQL 8.0
- Automatic migrations with seed data

## Kurulum

### Ön Koşullar
- .NET 9 SDK
- Node.js 18+
- Docker & Docker Compose
- Git

### Backend Kurulumu

1. MySQL'i Docker'da başlat:
```bash
cd velora_web2
docker compose up -d
```

2. Migration ve seed'i çalıştır:
```bash
cd api/VeloraDX.Api
dotnet ef database update -p ../VeloraDX.Infrastructure
```

3. API'yi çalıştır:
```bash
dotnet run
```

API `http://localhost:5000` adresinde çalışacak. Swagger UI: `http://localhost:5000/swagger`

### Frontend Kurulumu

1. Dependencies'i yükle:
```bash
cd web
npm install
```

2. Dev server'ı başlat:
```bash
npm run dev
```

Site `http://localhost:3000` adresinde açılacak.

## API Endpoints

### Services
- `GET /api/services` — Tüm hizmetler
- `GET /api/services/{slug}` — Hizmet detayı

### Blog
- `GET /api/blog/categories` — Blog kategorileri
- `GET /api/blog/posts?page=1&pageSize=10&category={slug}` — Blog yazıları (sayfalı, filtreleme)
- `GET /api/blog/posts/{slug}` — Blog yazısı detayı

### Case Studies
- `GET /api/case-studies?page=1&pageSize=10` — Case study'ler
- `GET /api/case-studies/{slug}` — Case study detayı

### Careers
- `GET /api/careers` — Açık pozisyonlar
- `GET /api/careers/{slug}` — Pozisyon detayı

### Company
- `GET /api/company/team` — Takım üyeleri
- `GET /api/company/stats` — Şirket istatistikleri

### Contact
- `POST /api/contact` — İletişim formu gönderimi
  ```json
  {
    "name": "Ad Soyad",
    "email": "email@example.com",
    "phone": "+90 555 000 00 00",
    "company": "Şirket Adı",
    "subject": "Konu",
    "message": "Mesaj metni"
  }
  ```

## Sayfa Yapısı (Next.js)

- `/` — Ana Sayfa
- `/hizmetler` — Hizmetler Listesi
- `/hizmetler/[slug]` — Hizmet Detayı
- `/blog` — Blog Yazıları (sayfalı)
- `/blog/[slug]` — Blog Yazısı Detayı
- `/projeler` — Case Studies Listesi
- `/projeler/[slug]` — Case Study Detayı
- `/kariyer` — Açık Pozisyonlar
- `/kariyer/[slug]` — Pozisyon Detayı
- `/hakkimizda` — Hakkımızda (Takım, İstatistikler)
- `/iletisim` — İletişim Formu

## SEO Features

- ✅ Dynamic metadata per page (`generateMetadata`)
- ✅ JSON-LD structured data (Organization, Article, JobPosting)
- ✅ Open Graph & Twitter Card tags
- ✅ Sitemap.xml (dinamik)
- ✅ robots.txt
- ✅ Next.js Image optimization
- ✅ ISR for static + fresh content
- ✅ Canonical URLs

## Environment Variables

### Backend (.env / appsettings.json)
```
ConnectionStrings__DefaultConnection=Server=localhost;Port=3306;Database=VeloraDX;User=root;Password=root;

Smtp__Host=smtp.gmail.com
Smtp__Port=587
Smtp__Username=your-email@gmail.com
Smtp__Password=your-app-password
Smtp__FromEmail=noreply@veloradx.com
Smtp__FromName=VeloraDX
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Veritabanı Şeması

**Entities:**
- `Service` — Hizmetler
- `CaseStudy` — Vaka Çalışmaları
- `BlogCategory` — Blog Kategorileri
- `BlogPost` — Blog Yazıları
- `JobOpening` — Açık Pozisyonlar
- `TeamMember` — Takım Üyeleri
- `CompanyStat` — Şirket İstatistikleri
- `ContactSubmission` — İletişim Formları

Tümü seed data ile doldurulmuştur. Admin panel olmadığı için, dinamik veri güncellemeleri SQL migration'ları veya EF Core'u kullanarak yapılmalıdır.

## Styling

- **Tailwind CSS** — Utility-first CSS framework
- **shadcn/ui** — Profesyonel React components (Button, Card, Badge, Input, Textarea)
- **Renk Paleti:** Koyu lacivert (`blue-600`) + elektrik mavisi (`blue-400`) vurgusu, AI/teknoloji şirketine uygun

## Performance

- ISR (3600s default) — Sayılar her saate bir yenilenir
- Next.js Image Optimization
- CSS-in-JS minimal (Tailwind)
- API client caching ready

## Development vs Production

**Development:**
- `npm run dev` — Next.js dev server (3000)
- `dotnet run` — API (5000)

**Production:**
- Next.js deployment (Vercel recommended)
- ASP.NET Core deployment (Docker, IIS, Azure App Service)
- Database: managed MySQL (AWS RDS, Azure Database, etc.)

## Next Steps

1. **Kustomizasyon:**
   - Logo, renkler, font'lar
   - Seed data (hizmetler, blog yazıları, takım) güncelle
   - SMTP ayarlarını yapılandır

2. **Admin Panel (Opsiyonel):**
   - Aynı API'leri kullanacak başka bir Next.js app
   - JWT authentication ekle
   - CRUD operations

3. **Deployment:**
   - Vercel'e Next.js push
   - Docker'ı cloud'a deploy et
   - Database'i managed service'e taşı

## Lisans

MIT
