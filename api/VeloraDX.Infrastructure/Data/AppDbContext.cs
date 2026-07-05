using Microsoft.EntityFrameworkCore;
using VeloraDX.Domain.Entities;

namespace VeloraDX.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Service> Services { get; set; }
    public DbSet<CaseStudy> CaseStudies { get; set; }
    public DbSet<BlogCategory> BlogCategories { get; set; }
    public DbSet<BlogPost> BlogPosts { get; set; }
    public DbSet<JobOpening> JobOpenings { get; set; }
    public DbSet<TeamMember> TeamMembers { get; set; }
    public DbSet<CompanyStat> CompanyStats { get; set; }
    public DbSet<ContactSubmission> ContactSubmissions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        var now = DateTime.UtcNow;

        var blogCategories = new[]
        {
            new BlogCategory { Id = 1, Name = "Yapay Zeka", Slug = "yapay-zeka" },
            new BlogCategory { Id = 2, Name = "Yazılım Geliştirme", Slug = "yazilim-gelistirme" },
            new BlogCategory { Id = 3, Name = "İçgörüler", Slug = "icgorular" }
        };
        modelBuilder.Entity<BlogCategory>().HasData(blogCategories);

        var services = new[]
        {
            new Service
            {
                Id = 1,
                Slug = "yapay-zeka-entegrasyonu",
                Title = "Yapay Zeka Entegrasyonu",
                ShortDescription = "Mevcut sistemlerinize yapay zeka gücü ekleyin.",
                Content = "Özel eğitilmiş AI modelleri ile işlemlerinizi otomate edin, verimliliği artırın ve müşteri deneyimini iyileştirin.",
                IconName = "Brain",
                DisplayOrder = 1,
                CreatedAt = now
            },
            new Service
            {
                Id = 2,
                Slug = "ai-donusum-danismanlik",
                Title = "AI Dönüşüm Danışmanlığı",
                ShortDescription = "Dijital dönüşüm yolculuğunuzda AI stratejisi belirleyin.",
                Content = "Endüstri deneyimli danışmanlarımız, organizasyonunuzun AI yetkinliğini geliştirmesi için yol haritası çizer.",
                IconName = "Compass",
                DisplayOrder = 2,
                CreatedAt = now
            },
            new Service
            {
                Id = 3,
                Slug = "ozel-yazilim-gelistirme",
                Title = "Özel Yazılım Geliştirme",
                ShortDescription = "İş gereksinimlerinize uygun ölçeklenebilir yazılım çözümleri.",
                Content = "Cloud-native, microservices ve modern architecture'ları kullanarak, yüksek performanslı ve bakımı kolay yazılımlar geliştiririz.",
                IconName = "Code",
                DisplayOrder = 3,
                CreatedAt = now
            }
        };
        modelBuilder.Entity<Service>().HasData(services);

        var caseStudies = new[]
        {
            new CaseStudy
            {
                Id = 1,
                Slug = "e-ticaret-ai-optimizasyonu",
                Title = "E-Ticaret Platformu AI Optimizasyonu",
                ClientName = "TurboShop A.Ş.",
                Summary = "Büyük e-ticaret platformunun ürün önerilerini AI ile optimize ederek satışları %35 artırdık.",
                Content = "TurboShop, yıllık 50 milyon ziyaretçisi olan bir e-ticaret platformu. Ürün önerilemeleri algoritmasını geliştirerek, müşteri başına ortalama sepetin %35 arttığını gördük.",
                CoverImageUrl = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
                Industry = "E-Ticaret",
                PublishedAt = now.AddDays(-30),
                CreatedAt = now
            },
            new CaseStudy
            {
                Id = 2,
                Slug = "saglik-kurumu-nlp-cozumu",
                Title = "Sağlık Kurumu NLP Çözümü",
                ClientName = "Acibadem Sağlık Grubu",
                Summary = "Hastane kayıtlarında NLP uygulamalarıyla, tanı doğruluğu %28 arttı, işlem süresi %40 kısaldı.",
                Content = "Hastane idari işlemleri ve tıbbi kayıtları NLP ile otomasyonlaştırarak, kayıt girişi sürelerini önemli ölçüde kısalttık.",
                CoverImageUrl = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
                Industry = "Sağlık",
                PublishedAt = now.AddDays(-45),
                CreatedAt = now
            }
        };
        modelBuilder.Entity<CaseStudy>().HasData(caseStudies);

        var blogPosts = new[]
        {
            new BlogPost
            {
                Id = 1,
                Slug = "2024-yapay-zeka-trendleri",
                Title = "2024 Yapay Zeka Trendleri",
                Excerpt = "2024 yılında AI endüstrisini şekillendirecek ana trendlere göz atalım.",
                Content = "Generative AI, multimodal modeller, agentic AI ve daha birçok gelişme 2024 yılında bekleniyor...",
                CoverImageUrl = "https://images.unsplash.com/photo-1555949519-bfb4dd1b9b41?w=800",
                AuthorName = "Dr. Ahmet Kaya",
                CategoryId = 1,
                PublishedAt = now.AddDays(-20),
                MetaTitle = "2024 Yapay Zeka Trendleri - VeloraDX",
                MetaDescription = "2024 yılının en önemli AI trendlerini keşfedin. Generative AI, multimodal modeller ve daha fazlası.",
                CreatedAt = now
            },
            new BlogPost
            {
                Id = 2,
                Slug = "mikro-hizmetler-mimarisi-rehberi",
                Title = "Mikro Hizmetler Mimarisi Rehberi",
                Excerpt = "Modern yazılım geliştirmede mikro hizmetler mimarisinin avantajları ve zorlukları.",
                Content = "Mikro hizmetler, ölçeklenebilir ve esnek sistemler geliştirmenin anahtarıdır. Bu rehberde size step-by-step nasıl kuracağınızı gösterelim...",
                CoverImageUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
                AuthorName = "Murat Çetin",
                CategoryId = 2,
                PublishedAt = now.AddDays(-15),
                MetaTitle = "Mikro Hizmetler Mimarisi Rehberi",
                MetaDescription = "Yazılım geliştirmede mikro hizmetler mimarisinin tam rehberi. Avantajlar, zorluklar ve best practices.",
                CreatedAt = now
            }
        };
        modelBuilder.Entity<BlogPost>().HasData(blogPosts);

        var jobOpenings = new[]
        {
            new JobOpening
            {
                Id = 1,
                Slug = "senior-yapay-zeka-muhendisi",
                Title = "Senior Yapay Zeka Mühendisi",
                Department = "Araştırma & Geliştirme",
                Location = "İstanbul",
                EmploymentType = "Tam Zamanlı",
                Description = "Transformatif AI çözümleri geliştirmek için deneyimli bir mühendis arıyoruz.",
                Requirements = "5+ yıl AI/ML deneyimi\nPython, TensorFlow, PyTorch\nDeep Learning bilgisi",
                PostedAt = now.AddDays(-5),
                CreatedAt = now
            },
            new JobOpening
            {
                Id = 2,
                Slug = "full-stack-web-developer",
                Title = "Full Stack Web Developer",
                Department = "Ürün Geliştirme",
                Location = "İstanbul",
                EmploymentType = "Tam Zamanlı",
                Description = "Cloud-native web uygulamaları geliştirmek için yetenekli bir developer arıyoruz.",
                Requirements = "3+ yıl full-stack geliştirme\n.NET Core ve React bilgisi\nCloud services (Azure, AWS)",
                PostedAt = now.AddDays(-3),
                CreatedAt = now
            }
        };
        modelBuilder.Entity<JobOpening>().HasData(jobOpenings);

        var teamMembers = new[]
        {
            new TeamMember
            {
                Id = 1,
                Name = "Dr. Ayşe Aktaş",
                Title = "Kurucu & Yapay Zeka Stratejisti",
                PhotoUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                Bio = "AI endüstrisinde 15+ yıl deneyim, Stanford ve MIT'den ders almış.",
                DisplayOrder = 1,
                CreatedAt = now
            },
            new TeamMember
            {
                Id = 2,
                Name = "Emre Yıldız",
                Title = "Başkan Yönetici",
                PhotoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
                Bio = "Yazılım girişimciliğinde 20+ yıl, 5 startup kurmuş.",
                DisplayOrder = 2,
                CreatedAt = now
            },
            new TeamMember
            {
                Id = 3,
                Name = "Zeynep Kara",
                Title = "Ürün Direktörü",
                PhotoUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
                Bio = "Ürün yönetiminde ve UX tasarımında uzman.",
                DisplayOrder = 3,
                CreatedAt = now
            }
        };
        modelBuilder.Entity<TeamMember>().HasData(teamMembers);

        var stats = new[]
        {
            new CompanyStat { Id = 1, Label = "Tamamlanan Proje", Value = "150+", DisplayOrder = 1 },
            new CompanyStat { Id = 2, Label = "Memnun Müşteri", Value = "50+", DisplayOrder = 2 },
            new CompanyStat { Id = 3, Label = "Ekip Üyesi", Value = "35+", DisplayOrder = 3 },
            new CompanyStat { Id = 4, Label = "Yıl Tecrübe", Value = "20+", DisplayOrder = 4 }
        };
        modelBuilder.Entity<CompanyStat>().HasData(stats);
    }
}
