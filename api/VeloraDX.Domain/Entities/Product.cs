namespace VeloraDX.Domain.Entities;

public class Product
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string ShortDescription { get; set; } = string.Empty;
    public string FullDescription { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty; // AI Agents, ERP/CRM, Lojistik, İK, Sağlık
    public string IconName { get; set; } = "Zap";
    public string[] Features { get; set; } = Array.Empty<string>();
    public string TargetAudience { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; }
}
