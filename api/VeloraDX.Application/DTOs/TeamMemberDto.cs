namespace VeloraDX.Application.DTOs;

public class TeamMemberDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string PhotoUrl { get; set; } = string.Empty;
    public string Bio { get; set; } = string.Empty;
}
