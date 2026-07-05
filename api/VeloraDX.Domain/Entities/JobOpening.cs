namespace VeloraDX.Domain.Entities;

public class JobOpening
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string EmploymentType { get; set; } = "Tam Zamanlı";
    public string Description { get; set; } = string.Empty;
    public string Requirements { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
    public DateTime PostedAt { get; set; }
    public DateTime CreatedAt { get; set; }
}
