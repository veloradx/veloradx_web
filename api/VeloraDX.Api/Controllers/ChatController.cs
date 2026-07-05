using Microsoft.AspNetCore.Mvc;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly ILogger<ChatController> _logger;

    public ChatController(ILogger<ChatController> logger)
    {
        _logger = logger;
    }

    private static readonly Dictionary<string, string> KnowledgeBase = new()
    {
        // Selamlaşma & Casual
        { "merhaba", "Merhaba! 👋 VeloraDX Asistanı'na hoş geldiniz. Şirketimiz, ürünlerimiz, hizmetlerimiz veya herhangi bir konu hakkında sorularınız varsa yanıtlamaktan mutluyum." },
        { "selam", "Selam! 😊 VeloraDX hakkında bir şey bilmek ister misiniz? Size yardımcı olmaktan mutluyum." },
        { "nasılsın", "İyiyim, teşekkür ederim! 😊 VeloraDX ailesi olarak her gün daha iyi hizmet sunmak için çalışıyoruz. Sizin için nasıl yardımcı olabilirim?" },
        { "naber", "Selamlar! 👋 Her şey yolunda. AI dönüşümü hakkında merak ettikleriniz varsa, buradayım." },
        { "teşekkür", "Terbiyeli olduğunuz için biz teşekkür ederiz! 😊 Başka sorunuz varsa sormaktan çekinmeyin." },
        { "sağol", "Senin için! 💪 Başka bir şey sorabilir misin?" },
        { "adalet", "😄 Haklısınız! VeloraDX'te adalet ve eşitlik bizim değerlerimiz. Tüm müşterilerimiz eşit hizmet alır." },
        { "günaydın", "Günaydın! ☀️ İyi bir gün geçirmenizi diliyoruz. VeloraDX ile AI dönüşümüne başlamaya ne dersiniz?" },
        { "iyi akşamlar", "İyi akşamlar! 🌙 Akşamı iyi geçirmek dileğiyle. Sorularınız varsa yardımcı olmaya hazırım." },

        // Şirket Hakkında
        { "veloradx nedir", "VeloraDX, yapay zeka entegrasyonu ve dijital dönüşümde uzman bir danışmanlık şirketidir. Türkiye'deki işletmelerin AI yolculuğunda yanlarında yer alırız." },
        { "kim var ekipte", "VeloraDX 35+ profesyonelden oluşan bir ekibe sahip. AI mühendisleri, yazılım geliştirici ve danışmanlarımız 20+ yıl deneyimle çalışıyor." },
        { "nerde bulunuyorsunuz", "Şişli, İstanbul'da bulunuyoruz. Adres: Esentepe, Büyükdere Cd. No: 195, 34394 Şişli/İstanbul" },

        // İletişim
        { "iletişim", "Bize ulaşmak için: Telefon: +90 532 662 57 82, WhatsApp: wa.me/905326625782, Email: info@veloradx.com" },
        { "telefon numarası", "+90 532 662 57 82" },
        { "adres", "Esentepe, Büyükdere Cd. No: 195, 34394 Şişli/İstanbul" },

        // Hizmetler
        { "hangi hizmetler sunuyorsunuz", "Kurumsal AI Dönüşümü, Saha Ziyareti İle Keşif, AI Entegrasyonu, Yazılım Geliştirme ve danışmanlık hizmetleri sunuyoruz." },
        { "ai dönüşüm nedir", "Kurumsal AI Dönüşümü, 7 adımlı metodoloji ile işletmenizi yapay zeka ile güçlendirir. Danışmanlık → Pilot → İmplementasyon → Optimizasyon" },
        { "saha ziyareti ne", "Saha Ziyareti İle Keşif, danışmanlarımızın işletmenizi yerinde ziyaret ederek gizli AI fırsatlarını keşfetmesidir." },

        // Ürünler
        { "hangi ürünleriniz var", "AI Voice Agents, VeloraDX CRM, VeloraDX ERP, HRFlow, Kurye Takip, WMS, ve diğer 7+ AI ürünümüz bulunuyor." },
        { "ai voice agents", "Telefonda konuşan, anlayan ve işi bitiren sesli yapay zeka ajanları. Çağrı merkezleri, klinikler ve e-ticaret şirketleri için ideal." },
        { "crm", "VeloraDX CRM, satış sürecinizi yöneten, AI ile lead skorlama yapan ve müşteri ilişkilerini yönettirir." },
        { "erp", "VeloraDX ERP, stok, satın alma, üretim ve finansmanı yöneten modüler bir sistem. Agent'larla otonom karar alır." },

        // Metodoloji
        { "metodoloji", "Her şirket farklıdır. Biz derinlemesine analiz → fırsat tanımı → özel çözüm → ölçülebilir sonuçlar yapıyoruz." },
        { "neden şimdi ai", "Rakipleriniz dönüşüyor, AI artık avantaj değil hayatta kalma şartı. Geride kalıyor musunuz?" },

        // Misyon/Vizyon
        { "misyon", "Yapay zeka ve modern teknolojileri kullanarak işletmelerin dijital dönüşümünü hızlandırır, verimliliğini artırırız." },
        { "vizyon", "Türkiye'deki tüm işletmelerin AI teknolojisinden yararlanabildiği, erişilebilir ve ekonomik çözümler sunmak." },

        // Kariyer
        { "işe alıyor musunuz", "Evet! AI mühendisleri, yazılım geliştirici ve danışman arıyoruz. /kariyer sayfasında açık pozisyonlar var." },
        { "kariyer fırsatları", "Uzaktan çalışma, sürekli öğrenme, güçlü takım ve gerçek etki. CV'niz için bize yazın!" },
    };

    [HttpPost("ask")]
    public IActionResult Ask([FromBody] ChatRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Message))
            return BadRequest("Lütfen bir soru sorun.");

        var question = request.Message.ToLower().Trim();
        var (response, action) = FindAnswerWithAction(question);

        return Ok(new ChatResponse
        {
            Answer = response,
            Action = action,
            Timestamp = DateTime.UtcNow
        });
    }

    private (string answer, ChatAction? action) FindAnswerWithAction(string question)
    {
        var answer = FindAnswer(question);
        var action = DetermineAction(question);
        return (answer, action);
    }

    private string FindAnswer(string question)
    {
        // Tam eşleşme ara
        foreach (var (key, value) in KnowledgeBase)
        {
            if (question.Contains(key, StringComparison.OrdinalIgnoreCase))
                return value;
        }

        // Kısmi eşleşme ara
        var bestMatch = KnowledgeBase
            .OrderByDescending(x => CalculateSimilarity(question, x.Key))
            .FirstOrDefault();

        if (bestMatch.Value != null && CalculateSimilarity(question, bestMatch.Key) > 0.3)
            return bestMatch.Value;

        // Varsayılan cevap
        return "Maalesef bu sorunun cevabını bilmiyorum. Lütfen bize ulaşın: +90 532 662 57 82 veya iletisim@veloradx.com";
    }

    private ChatAction? DetermineAction(string question)
    {
        return question switch
        {
            // Ürünler
            var q when q.Contains("ürün") || q.Contains("product") || q.Contains("voice") || q.Contains("crm") || q.Contains("erp") =>
                new ChatAction { Type = "link", Label = "Ürünleri Keşfet", Url = "/urunler" },

            // Hizmetler
            var q when q.Contains("hizmet") || q.Contains("service") || q.Contains("dönüşüm") || q.Contains("keşif") =>
                new ChatAction { Type = "link", Label = "Hizmetleri Gör", Url = "/hizmetler" },

            // İletişim
            var q when q.Contains("telefon") || q.Contains("whatsapp") || q.Contains("email") || q.Contains("iletişim") || q.Contains("ulaş") =>
                new ChatAction { Type = "external", Label = "WhatsApp'ta Yazın", Url = "https://wa.me/905326625782" },

            // Kariyer
            var q when q.Contains("kariyer") || q.Contains("işe") || q.Contains("pozisyon") || q.Contains("çalış") =>
                new ChatAction { Type = "link", Label = "Açık Pozisyonlar", Url = "/kariyer" },

            // Blog
            var q when q.Contains("blog") || q.Contains("makale") || q.Contains("yazı") =>
                new ChatAction { Type = "link", Label = "Blog'u Oku", Url = "/blog" },

            // Hakkımızda
            var q when q.Contains("misyon") || q.Contains("vizyon") || q.Contains("takım") || q.Contains("hakkında") =>
                new ChatAction { Type = "link", Label = "Hakkımızda", Url = "/hakkimizda" },

            _ => null
        };
    }

    private double CalculateSimilarity(string s1, string s2)
    {
        var longer = s1.Length > s2.Length ? s1 : s2;
        var shorter = s1.Length > s2.Length ? s2 : s1;

        if (longer.Length == 0) return 1.0;

        var editDistance = LevenshteinDistance(longer, shorter);
        return (longer.Length - editDistance) / (double)longer.Length;
    }

    private int LevenshteinDistance(string s1, string s2)
    {
        var costs = new int[s1.Length + 1, s2.Length + 1];

        for (int i = 0; i <= s1.Length; i++)
            costs[i, 0] = i;

        for (int j = 0; j <= s2.Length; j++)
            costs[0, j] = j;

        for (int i = 1; i <= s1.Length; i++)
        {
            for (int j = 1; j <= s2.Length; j++)
            {
                var cost = s1[i - 1] == s2[j - 1] ? 0 : 1;
                costs[i, j] = Math.Min(
                    Math.Min(costs[i - 1, j] + 1, costs[i, j - 1] + 1),
                    costs[i - 1, j - 1] + cost
                );
            }
        }

        return costs[s1.Length, s2.Length];
    }
}

public class ChatRequest
{
    public string Message { get; set; } = string.Empty;
}

public class ChatResponse
{
    public string Answer { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
    public ChatAction? Action { get; set; }
}

public class ChatAction
{
    public string Type { get; set; } = "link"; // "link" or "external"
    public string Label { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}
