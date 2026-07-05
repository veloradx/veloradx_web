using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeloraDX.Application.DTOs;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CaseStudiesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CaseStudiesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CaseStudyListItemDto>>> GetAll(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10)
    {
        var studies = await _context.CaseStudies
            .Where(cs => cs.IsActive)
            .OrderByDescending(cs => cs.PublishedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(cs => new CaseStudyListItemDto
            {
                Id = cs.Id,
                Slug = cs.Slug,
                Title = cs.Title,
                Summary = cs.Summary,
                CoverImageUrl = cs.CoverImageUrl,
                Industry = cs.Industry,
                PublishedAt = cs.PublishedAt
            })
            .ToListAsync();

        return Ok(studies);
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<CaseStudyDetailDto>> GetBySlug(string slug)
    {
        var study = await _context.CaseStudies
            .Where(cs => cs.IsActive && cs.Slug == slug)
            .Select(cs => new CaseStudyDetailDto
            {
                Id = cs.Id,
                Slug = cs.Slug,
                Title = cs.Title,
                ClientName = cs.ClientName,
                Summary = cs.Summary,
                Content = cs.Content,
                CoverImageUrl = cs.CoverImageUrl,
                Industry = cs.Industry,
                PublishedAt = cs.PublishedAt
            })
            .FirstOrDefaultAsync();

        if (study == null)
            return NotFound();

        return Ok(study);
    }
}
