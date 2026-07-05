using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeloraDX.Application.DTOs;
using VeloraDX.Domain.Entities;
using VeloraDX.Infrastructure.Data;

namespace VeloraDX.Api.Controllers;

[ApiController]
[Route("api/blog")]
public class BlogController : ControllerBase
{
    private readonly AppDbContext _context;

    public BlogController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("categories")]
    public async Task<ActionResult<IEnumerable<BlogCategoryDto>>> GetCategories()
    {
        var categories = await _context.BlogCategories
            .OrderBy(c => c.Name)
            .Select(c => new BlogCategoryDto
            {
                Id = c.Id,
                Slug = c.Slug,
                Name = c.Name
            })
            .ToListAsync();

        return Ok(categories);
    }

    [HttpGet("posts")]
    public async Task<ActionResult<IEnumerable<BlogPostListItemDto>>> GetPosts(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? category = null)
    {
        IQueryable<BlogPost> query = _context.BlogPosts
            .Include(p => p.Category)
            .Where(p => p.IsPublished);

        query = query.OrderByDescending(p => p.PublishedAt);

        if (!string.IsNullOrEmpty(category))
            query = query.Where(p => p.Category.Slug == category);

        var posts = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(p => new BlogPostListItemDto
            {
                Id = p.Id,
                Slug = p.Slug,
                Title = p.Title,
                Excerpt = p.Excerpt,
                CoverImageUrl = p.CoverImageUrl,
                AuthorName = p.AuthorName,
                CategoryName = p.Category.Name,
                PublishedAt = p.PublishedAt
            })
            .ToListAsync();

        return Ok(posts);
    }

    [HttpGet("posts/{slug}")]
    public async Task<ActionResult<BlogPostDetailDto>> GetPostBySlug(string slug)
    {
        var post = await _context.BlogPosts
            .Include(p => p.Category)
            .Where(p => p.Slug == slug && p.IsPublished)
            .Select(p => new BlogPostDetailDto
            {
                Id = p.Id,
                Slug = p.Slug,
                Title = p.Title,
                Excerpt = p.Excerpt,
                Content = p.Content,
                CoverImageUrl = p.CoverImageUrl,
                AuthorName = p.AuthorName,
                CategoryName = p.Category.Name,
                PublishedAt = p.PublishedAt,
                MetaTitle = p.MetaTitle,
                MetaDescription = p.MetaDescription
            })
            .FirstOrDefaultAsync();

        if (post == null)
            return NotFound();

        return Ok(post);
    }
}
