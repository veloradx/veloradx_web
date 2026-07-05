namespace VeloraDX.Application.DTOs;

public class ServiceDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string ShortDescription { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string IconName { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
}
