using Microsoft.AspNetCore.Mvc;
using VeloraDX.Application.DTOs;
using VeloraDX.Domain.Entities;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<ContactSubmissionDto>> Submit(CreateContactSubmissionDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var submission = new ContactSubmission
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            Company = dto.Company,
            Subject = dto.Subject,
            Message = dto.Message,
            CreatedAt = DateTime.UtcNow,
            IsRead = false
        };

        _context.ContactSubmissions.Add(submission);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Submit), new ContactSubmissionDto
        {
            Id = submission.Id,
            Name = submission.Name,
            Email = submission.Email,
            CreatedAt = submission.CreatedAt
        });
    }
}
