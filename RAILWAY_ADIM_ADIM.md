# Railway'de Adım Adım Deploy Rehberi

## 🔴 Adım 1: Railway Hesabı Oluştur

1. **[railway.app](https://railway.app)** açın
2. **Sign Up** butonuna tıkla
3. **GitHub ile Giriş Yap** seçeneğini seç
4. GitHub izinlerini onayla
5. Hesap oluşturuldu ✓

---

## 🟠 Adım 2: Yeni Proje Başlat

1. Railway dashboard'da **New Project** butonuna tıkla
2. **Deploy from GitHub repo** seçeneğini seç
3. GitHub hesabını Railway'e bağla (eğer bağlı değilse)

---

## 🟡 Adım 3: Repository Seç

1. **Select a Repository** kısmında ara çubuğuna `veloradx_web` yaz
2. `veloradx/veloradx_web` repository'sini seç
3. **Confirm** butonuna tıkla

Railway otomatik olarak repo'yu tarayacak ve **2 Dockerfile bulacak**:
- `web/Dockerfile` (Next.js)
- `api/Dockerfile` (ASP.NET Core)

---

## 🟢 Adım 4: Web Service Konfigürasyonu

### Web Service'i Seç
1. Dashboard'da **web** service kartına tıkla
2. **Settings** tab'ına git

### Build Ayarları
1. **Build** kısmında:
   - **Dockerfile Path**: `web/Dockerfile` (otomatik dolu olmalı)
   - **Build Context**: `.` (kök dizin)
2. **Deploy** butonuna tıkla (ilk kez build başlayacak)

### Environment Variables Ekle
1. **Variables** tab'ına git
2. **New Variable** butonuna tıkla
3. Aşağıdaki değerleri ekle:

```
Adı: NEXT_PUBLIC_API_URL
Değeri: http://localhost:5000/api
(Production'da API URL'i güncelleyeceksin)
```

4. **Add Variable** butonuna tıkla
5. Bir tane daha ekle:

```
Adı: NODE_ENV
Değeri: production
```

---

## 🔵 Adım 5: API Service Konfigürasyonu

### API Service'i Seç
1. Dashboard'a geri dön
2. **api** service kartına tıkla
3. **Settings** tab'ına git

### Build Ayarları
1. **Build** kısmında:
   - **Dockerfile Path**: `api/Dockerfile` (otomatik dolu olmalı)
   - **Build Context**: `.` (kök dizin)
2. **Deploy** butonuna tıkla

### Environment Variables Ekle
1. **Variables** tab'ına git
2. **New Variable** butonuna tıkla

```
Adı: ASPNETCORE_ENVIRONMENT
Değeri: Production
```

3. **Add Variable** butonuna tıkla
4. Bir tane daha ekle:

```
Adı: ASPNETCORE_URLS
Değeri: http://+:5000
```

---

## 🟣 Adım 6: MySQL Database Ekle (ÖNEMLİ!)

### Yeni Service Ekle
1. **New** butonuna tıkla (sağ üstte + işareti)
2. **Database** → **MySQL** seçeneğini seç
3. Railway MySQL service oluşturacak

### Connection String
1. MySQL service kartına tıkla
2. **Settings** → **Variables** kısmına git
3. Railway otomatik olarak connection string'i oluşturdu
4. Değerini kopyala

### API'ye Connection String Ekle
1. **api** service'e dön
2. **Settings** → **Variables** git
3. **New Variable** ekle:

```
Adı: ConnectionStrings__DefaultConnection
Değeri: (MySQL'den kopyaladığın connection string)
```

---

## 🎯 Adım 7: Deployment Başlat

### Deploy Button'ları
1. **web** service → **Settings** → **Deploy** butonuna tıkla
   - Build başlayacak (~3-5 dakika)
   - Logs'ı izleyebilirsin

2. Build bittikten sonra, aynısını **api** service için yap
   - API build'ı daha uzun alabilir (~5-10 dakika)

### Deploy Status
- Sarı renk = Deploying (bekle)
- Yeşil renk = Success ✓
- Kırmızı renk = Error ✗ (logs'ı kontrol et)

---

## 📱 Adım 8: Deployment Linklerini Al

### Web URL'i
1. **web** service kartında, en üstte bir link göreceksin
2. Örnek: `https://veloradx-web-prod-xxxx.up.railway.app`
3. Tıklayarak test et (sayfanın açılıp açılmadığını kontrol et)

### API URL'i
1. **api** service kartında, en üstte link var
2. Örnek: `https://veloradx-api-prod-xxxx.up.railway.app/api`
3. `/api/services` ekleyerek test et

---

## 🔄 Adım 9: Web'in API URL'ini Güncelle (ÖNEMLİ!)

Web service API'yi localhost'tan bulmamış olabilir. URL'i güncellemeliyiz:

1. **web** service → **Settings** → **Variables**
2. **NEXT_PUBLIC_API_URL** değerini düzenle:

```
Eski: http://localhost:5000/api
Yeni: https://veloradx-api-prod-xxxx.up.railway.app/api
```

3. **Save** butonuna tıkla
4. Web otomatik olarak redeploy edilecek

---

## ✅ Adım 10: Test Et

### Frontend Test
1. Web link'ini tarayıcıda aç
2. Ana sayfanın yüklenip yüklenmediğini kontrol et
3. Hizmetler, Case Studies, vb. bölümler görünüyor mu?

### API Test
1. API link'ini açın: `https://your-api.up.railway.app/api/services`
2. JSON response görmen gerekir
3. Services listesi geliyorsa OK ✓

### Form Testi
1. İletişim sayfasına git
2. Form doldir ve gönder
3. Database'e kaydedildi mi kontrol et

---

## 🚨 Hata Çözümleri

### Web sayfası açılmıyor
- **Çözüm**: Web service logs'ını kontrol et
  - Service kartı → üç nokta menüsü → **View Logs**
  - Build error varsa, Dockerfile'ı kontrol et

### API yanıt vermiyor
- **Çözüm**: API service logs'ı kontrol et
- Database connection'ı kontrol et (MySQL ayakta mı?)

### Database bağlantı hatası
- **Çözüm**: Connection string doğru mu?
  - MySQL service'de **Variables** kontrol et
  - API service'deki connection string güncelle

---

## 🔄 Otomatik Deploy Ayarı

Her push'ta otomatik deploy etmesini sağlamak için:

1. Her service'e gir → **Settings** → **Deploy**
2. **Auto Deploy** toggle'ını **ON** yap
3. Artık her GitHub push'ta otomatik deploy olur ✓

---

## 📊 Production'a Geç

### Custom Domain
1. Service → **Settings** → **Domains**
2. **+ Add Domain** butonuna tıkla
3. Kendi domain'ini gir: `api.yourdomain.com`
4. DNS CNAME record'unu güncelle

### Environment Configuration
Production'da farklı ayarlar olabilir:
- Database connection
- API URL
- Secrets

Her environment için ayrı variables set edebilirsin.

---

## 📞 Yardım Gerekirse

- Railway Docs: https://docs.railway.app
- Discord: Railway Community Server
- Logs'ı her zaman kontrol et (hataların sebebi orada yazılı)

**Hepsi bu kadar! 🎉**
