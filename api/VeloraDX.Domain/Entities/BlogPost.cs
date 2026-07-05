namespace VeloraDX.Domain.Entities;

public class BlogPost
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string AuthorName { get; set; } = "VeloraDX Tim";
    public int CategoryId { get; set; }
    public BlogCategory Category { get; set; } = null!;
    public DateTime PublishedAt { get; set; }
    public bool IsPublished { get; set; } = true;
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
