namespace VeloraDX.Domain.Entities;

public class TeamMember
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string PhotoUrl { get; set; } = string.Empty;
    public string Bio { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
    public DateTime CreatedAt { get; set; }
}
