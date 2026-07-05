namespace VeloraDX.Domain.Entities;

public class CompanyStat
{
    public int Id { get; set; }
    public string Label { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
}
