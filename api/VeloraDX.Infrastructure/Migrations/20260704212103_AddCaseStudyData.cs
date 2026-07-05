using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VeloraDX.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddCaseStudyData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 6, 14, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 6, 19, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "CaseStudies",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 6, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "CaseStudies",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 5, 20, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "JobOpenings",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PostedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 6, 29, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "JobOpenings",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PostedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279), new DateTime(2026, 7, 1, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279) });

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 21, 20, 58, 662, DateTimeKind.Utc).AddTicks(9279));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 6, 14, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 6, 19, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "CaseStudies",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 6, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "CaseStudies",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PublishedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 5, 20, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "JobOpenings",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "PostedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 6, 29, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "JobOpenings",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "PostedAt" },
                values: new object[] { new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866), new DateTime(2026, 7, 1, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866) });

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));

            migrationBuilder.UpdateData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));

            migrationBuilder.UpdateData(
                table: "TeamMembers",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2026, 7, 4, 14, 18, 34, 527, DateTimeKind.Utc).AddTicks(2866));
        }
    }
}
