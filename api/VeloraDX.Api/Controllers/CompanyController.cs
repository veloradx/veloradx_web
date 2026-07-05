using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeloraDX.Application.DTOs;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/company")]
public class CompanyController : ControllerBase
{
    private readonly AppDbContext _context;

    public CompanyController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("team")]
    public async Task<ActionResult<IEnumerable<TeamMemberDto>>> GetTeam()
    {
        var members = await _context.TeamMembers
            .OrderBy(m => m.DisplayOrder)
            .Select(m => new TeamMemberDto
            {
                Id = m.Id,
                Name = m.Name,
                Title = m.Title,
                PhotoUrl = m.PhotoUrl,
                Bio = m.Bio
            })
            .ToListAsync();

        return Ok(members);
    }

    [HttpGet("stats")]
    public async Task<ActionResult<IEnumerable<CompanyStatDto>>> GetStats()
    {
        var stats = await _context.CompanyStats
            .OrderBy(s => s.DisplayOrder)
            .Select(s => new CompanyStatDto
            {
                Id = s.Id,
                Label = s.Label,
                Value = s.Value
            })
            .ToListAsync();

        return Ok(stats);
    }
}
