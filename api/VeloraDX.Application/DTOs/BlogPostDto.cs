namespace VeloraDX.Application.DTOs;

public class BlogPostListItemDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string AuthorName { get; set; } = string.Empty;
    public string CategoryName { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
}

public class BlogPostDetailDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string AuthorName { get; set; } = string.Empty;
    public string CategoryName { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
}
