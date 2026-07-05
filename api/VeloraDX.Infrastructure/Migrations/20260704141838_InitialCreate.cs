using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace VeloraDX.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "BlogCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Slug = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogCategories", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CaseStudies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Slug = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ClientName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Summary = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Content = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CoverImageUrl = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Industry = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PublishedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IsActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CaseStudies", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CompanyStats",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Label = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Value = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyStats", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ContactSubmissions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Phone = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Company = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Subject = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Message = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IsRead = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactSubmissions", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "JobOpenings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Slug = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Department = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Location = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    EmploymentType = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Requirements = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IsActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PostedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobOpenings", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Slug = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ShortDescription = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Content = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IconName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "TeamMembers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PhotoUrl = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Bio = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeamMembers", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "BlogPosts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Slug = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Excerpt = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Content = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CoverImageUrl = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AuthorName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    PublishedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IsPublished = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    MetaTitle = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    MetaDescription = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BlogPosts_BlogCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "BlogCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "BlogCategories",
                columns: new[] { "Id", "Name", "Slug" },
                values: new object[,]
                {
                    { 1, "Yapay Zeka", "yapay-zeka" },
                    { 2, "Yazılım Geliştirme", "yazilim-gelistirme" },
                    { 3, "İçgörüler", "icgorular" }
                });

            migrationBuilder.InsertData(
                table: "CaseStudies",
                columns: new[] { "Id", "ClientName", "Content", "CoverImageUrl", "CreatedAt", "Industry", "IsActive", "PublishedAt", "Slug", "Summary", "Title" },
                values: new object[,]
                {
                    { 1, "TurboShop A.Ş.", "TurboShop, yıllık 50 milyon ziyaretçisi olan bir e-ticaret platformu. Ürün önerilemeleri algoritmasını geliştirerek, müşteri başına ortalama sepetin %35 arttığını gördük.", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "E-Ticaret", true, new DateTime(2026, 6, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "e-ticaret-ai-optimizasyonu", "Büyük e-ticaret platformunun ürün önerilerini AI ile optimize ederek satışları %35 artırdık.", "E-Ticaret Platformu AI Optimizasyonu" },
                    { 2, "Acibadem Sağlık Grubu", "Hastane idari işlemleri ve tıbbi kayıtları NLP ile otomasyonlaştırarak, kayıt girişi sürelerini önemli ölçüde kısalttık.", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "Sağlık", true, new DateTime(2026, 5, 20, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "saglik-kurumu-nlp-cozumu", "Hastane kayıtlarında NLP uygulamalarıyla, tanı doğruluğu %28 arttı, işlem süresi %40 kısaldı.", "Sağlık Kurumu NLP Çözümü" }
                });

            migrationBuilder.InsertData(
                table: "CompanyStats",
                columns: new[] { "Id", "DisplayOrder", "Label", "Value" },
                values: new object[,]
                {
                    { 1, 1, "Tamamlanan Proje", "150+" },
                    { 2, 2, "Memnun Müşteri", "50+" },
                    { 3, 3, "Ekip Üyesi", "35+" },
                    { 4, 4, "Yıl Tecrübe", "20+" }
                });

            migrationBuilder.InsertData(
                table: "JobOpenings",
                columns: new[] { "Id", "CreatedAt", "Department", "Description", "EmploymentType", "IsActive", "Location", "PostedAt", "Requirements", "Slug", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "Araştırma & Geliştirme", "Transformatif AI çözümleri geliştirmek için deneyimli bir mühendis arıyoruz.", "Tam Zamanlı", true, "İstanbul", new DateTime(2026, 6, 29, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "5+ yıl AI/ML deneyimi\nPython, TensorFlow, PyTorch\nDeep Learning bilgisi", "senior-yapay-zeka-muhendisi", "Senior Yapay Zeka Mühendisi" },
                    { 2, new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "Ürün Geliştirme", "Cloud-native web uygulamaları geliştirmek için yetenekli bir developer arıyoruz.", "Tam Zamanlı", true, "İstanbul", new DateTime(2026, 7, 1, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "3+ yıl full-stack geliştirme\n.NET Core ve React bilgisi\nCloud services (Azure, AWS)", "full-stack-web-developer", "Full Stack Web Developer" }
                });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "Content", "CreatedAt", "DisplayOrder", "IconName", "IsActive", "ShortDescription", "Slug", "Title" },
                values: new object[,]
                {
                    { 1, "Özel eğitilmiş AI modelleri ile işlemlerinizi otomate edin, verimliliği artırın ve müşteri deneyimini iyileştirin.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 1, "Brain", true, "Mevcut sistemlerinize yapay zeka gücü ekleyin.", "yapay-zeka-entegrasyonu", "Yapay Zeka Entegrasyonu" },
                    { 2, "Endüstri deneyimli danışmanlarımız, organizasyonunuzun AI yetkinliğini geliştirmesi için yol haritası çizer.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 2, "Compass", true, "Dijital dönüşüm yolculuğunuzda AI stratejisi belirleyin.", "ai-donusum-danismanlik", "AI Dönüşüm Danışmanlığı" },
                    { 3, "Cloud-native, microservices ve modern architecture'ları kullanarak, yüksek performanslı ve bakımı kolay yazılımlar geliştiririz.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 3, "Code", true, "İş gereksinimlerinize uygun ölçeklenebilir yazılım çözümleri.", "ozel-yazilim-gelistirme", "Özel Yazılım Geliştirme" }
                });

            migrationBuilder.InsertData(
                table: "TeamMembers",
                columns: new[] { "Id", "Bio", "CreatedAt", "DisplayOrder", "Name", "PhotoUrl", "Title" },
                values: new object[,]
                {
                    { 1, "AI endüstrisinde 15+ yıl deneyim, Stanford ve MIT'den ders almış.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 1, "Dr. Ayşe Aktaş", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", "Kurucu & Yapay Zeka Stratejisti" },
                    { 2, "Yazılım girişimciliğinde 20+ yıl, 5 startup kurmuş.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 2, "Emre Yıldız", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", "Başkan Yönetici" },
                    { 3, "Ürün yönetiminde ve UX tasarımında uzman.", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), 3, "Zeynep Kara", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", "Ürün Direktörü" }
                });

            migrationBuilder.InsertData(
                table: "BlogPosts",
                columns: new[] { "Id", "AuthorName", "CategoryId", "Content", "CoverImageUrl", "CreatedAt", "Excerpt", "IsPublished", "MetaDescription", "MetaTitle", "PublishedAt", "Slug", "Title" },
                values: new object[,]
                {
                    { 1, "Dr. Ahmet Kaya", 1, "Generative AI, multimodal modeller, agentic AI ve daha birçok gelişme 2024 yılında bekleniyor...", "https://images.unsplash.com/photo-1555949519-bfb4dd1b9b41?w=800", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "2024 yılında AI endüstrisini şekillendirecek ana trendlere göz atalım.", true, "2024 yılının en önemli AI trendlerini keşfedin. Generative AI, multimodal modeller ve daha fazlası.", "2024 Yapay Zeka Trendleri - VeloraDX", new DateTime(2026, 6, 14, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "2024-yapay-zeka-trendleri", "2024 Yapay Zeka Trendleri" },
                    { 2, "Murat Çetin", 2, "Mikro hizmetler, ölçeklenebilir ve esnek sistemler geliştirmenin anahtarıdır. Bu rehberde size step-by-step nasıl kuracağınızı gösterelim...", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "Modern yazılım geliştirmede mikro hizmetler mimarisinin avantajları ve zorlukları.", true, "Yazılım geliştirmede mikro hizmetler mimarisinin tam rehberi. Avantajlar, zorluklar ve best practices.", "Mikro Hizmetler Mimarisi Rehberi", new DateTime(2026, 6, 19, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), "mikro-hizmetler-mimarisi-rehberi", "Mikro Hizmetler Mimarisi Rehberi" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogPosts_CategoryId",
                table: "BlogPosts",
                column: "CategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogPosts");

            migrationBuilder.DropTable(
                name: "CaseStudies");

            migrationBuilder.DropTable(
                name: "CompanyStats");

            migrationBuilder.DropTable(
                name: "ContactSubmissions");

            migrationBuilder.DropTable(
                name: "JobOpenings");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "TeamMembers");

            migrationBuilder.DropTable(
                name: "BlogCategories");
        }
    }
}
