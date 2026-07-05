using Microsoft.EntityFrameworkCore;
using Serilog;
using VeloraDX.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNext", policy =>
    {
        policy
            .WithOrigins("http://localhost:3000", "http://localhost:3001")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 0)));
});

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddHealthChecks();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseCors("AllowNext");
app.UseAuthorization();
app.MapControllers();
app.MapHealthChecks("/health");

app.Run();
