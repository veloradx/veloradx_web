using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeloraDX.Application.DTOs;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CareersController : ControllerBase
{
    private readonly AppDbContext _context;

    public CareersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<JobOpeningListItemDto>>> GetAll()
    {
        var jobs = await _context.JobOpenings
            .Where(j => j.IsActive)
            .OrderByDescending(j => j.PostedAt)
            .Select(j => new JobOpeningListItemDto
            {
                Id = j.Id,
                Slug = j.Slug,
                Title = j.Title,
                Department = j.Department,
                Location = j.Location,
                EmploymentType = j.EmploymentType
            })
            .ToListAsync();

        return Ok(jobs);
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<JobOpeningDetailDto>> GetBySlug(string slug)
    {
        var job = await _context.JobOpenings
            .Where(j => j.IsActive && j.Slug == slug)
            .Select(j => new JobOpeningDetailDto
            {
                Id = j.Id,
                Slug = j.Slug,
                Title = j.Title,
                Department = j.Department,
                Location = j.Location,
                EmploymentType = j.EmploymentType,
                Description = j.Description,
                Requirements = j.Requirements
            })
            .FirstOrDefaultAsync();

        if (job == null)
            return NotFound();

        return Ok(job);
    }
}
