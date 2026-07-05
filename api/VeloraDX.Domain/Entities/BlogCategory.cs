namespace VeloraDX.Domain.Entities;

public class BlogCategory
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public ICollection<BlogPost> Posts { get; set; } = new List<BlogPost>();
}
