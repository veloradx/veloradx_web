using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeloraDX.Application.DTOs;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly AppDbContext _context;

    public ServicesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ServiceDto>>> GetAll()
    {
        var services = await _context.Services
            .Where(s => s.IsActive)
            .OrderBy(s => s.DisplayOrder)
            .Select(s => new ServiceDto
            {
                Id = s.Id,
                Slug = s.Slug,
                Title = s.Title,
                ShortDescription = s.ShortDescription,
                Content = s.Content,
                IconName = s.IconName,
                DisplayOrder = s.DisplayOrder
            })
            .ToListAsync();

        return Ok(services);
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<ServiceDto>> GetBySlug(string slug)
    {
        var service = await _context.Services
            .Where(s => s.IsActive && s.Slug == slug)
            .Select(s => new ServiceDto
            {
                Id = s.Id,
                Slug = s.Slug,
                Title = s.Title,
                ShortDescription = s.ShortDescription,
                Content = s.Content,
                IconName = s.IconName,
                DisplayOrder = s.DisplayOrder
            })
            .FirstOrDefaultAsync();

        if (service == null)
            return NotFound();

        return Ok(service);
    }
}
