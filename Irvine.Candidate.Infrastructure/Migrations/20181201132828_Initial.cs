using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Irvine.Agent.Infrastructure.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "agent");

            migrationBuilder.CreateSequence(
                name: "candidateseq",
                schema: "agent",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "experienceseq",
                schema: "agent",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "locationseq",
                schema: "agent",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "providerseq",
                schema: "agent",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "skillseq",
                schema: "agent",
                incrementBy: 10);

            migrationBuilder.CreateTable(
                name: "vielitrequests",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Time = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vielitrequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "agentstatus",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false, defaultValue: 1),
                    Name = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agentstatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "experiencetypes",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false, defaultValue: 1),
                    Name = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_experiencetypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "location",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    City = table.Column<string>(nullable: true),
                    County = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_location", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "provider",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    IdentityGuid = table.Column<string>(maxLength: 200, nullable: false),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_provider", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "skill",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_skill", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "candidates",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    CandidateStatusId = table.Column<int>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: false),
                    LocationId = table.Column<int>(nullable: true),
                    LookingForNext = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    PrescreeningLastVerified = table.Column<DateTimeOffset>(nullable: true),
                    ResumeUrl = table.Column<string>(nullable: true),
                    StartTime = table.Column<DateTimeOffset>(nullable: true),
                    Rate_MaximumRate = table.Column<int>(nullable: false),
                    Rate_MinimumRate = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_candidates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_candidates_agentstatus_CandidateStatusId",
                        column: x => x.CandidateStatusId,
                        principalSchema: "agent",
                        principalTable: "agentstatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_candidates_location_LocationId",
                        column: x => x.LocationId,
                        principalSchema: "agent",
                        principalTable: "location",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CandidateSkill",
                columns: table => new
                {
                    CandidateId = table.Column<int>(nullable: false),
                    SkillId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CandidateSkill", x => new { x.CandidateId, x.SkillId });
                    table.ForeignKey(
                        name: "FK_CandidateSkill_candidates_CandidateId",
                        column: x => x.CandidateId,
                        principalSchema: "agent",
                        principalTable: "candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CandidateSkill_skill_SkillId",
                        column: x => x.SkillId,
                        principalSchema: "agent",
                        principalTable: "skill",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "experiences",
                schema: "agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    CandidateId = table.Column<int>(nullable: true),
                    TypeId = table.Column<int>(nullable: false),
                    Years = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_experiences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_experiences_candidates_CandidateId",
                        column: x => x.CandidateId,
                        principalSchema: "agent",
                        principalTable: "candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_experiences_experiencetypes_TypeId",
                        column: x => x.TypeId,
                        principalSchema: "agent",
                        principalTable: "experiencetypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CandidateSkill_SkillId",
                table: "CandidateSkill",
                column: "SkillId");

            migrationBuilder.CreateIndex(
                name: "IX_candidates_CandidateStatusId",
                schema: "agent",
                table: "candidates",
                column: "CandidateStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_candidates_LocationId",
                schema: "agent",
                table: "candidates",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_experiences_CandidateId",
                schema: "agent",
                table: "experiences",
                column: "CandidateId");

            migrationBuilder.CreateIndex(
                name: "IX_experiences_TypeId",
                schema: "agent",
                table: "experiences",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_provider_IdentityGuid",
                schema: "agent",
                table: "provider",
                column: "IdentityGuid",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CandidateSkill");

            migrationBuilder.DropTable(
                name: "vielitrequests");

            migrationBuilder.DropTable(
                name: "experiences",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "provider",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "skill",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "candidates",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "experiencetypes",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "agentstatus",
                schema: "agent");

            migrationBuilder.DropTable(
                name: "location",
                schema: "agent");

            migrationBuilder.DropSequence(
                name: "candidateseq",
                schema: "agent");

            migrationBuilder.DropSequence(
                name: "experienceseq",
                schema: "agent");

            migrationBuilder.DropSequence(
                name: "locationseq",
                schema: "agent");

            migrationBuilder.DropSequence(
                name: "providerseq",
                schema: "agent");

            migrationBuilder.DropSequence(
                name: "skillseq",
                schema: "agent");
        }
    }
}
