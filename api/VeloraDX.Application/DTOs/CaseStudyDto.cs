namespace VeloraDX.Application.DTOs;

public class CaseStudyListItemDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string Industry { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
}

public class CaseStudyDetailDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string ClientName { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string Industry { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
}
