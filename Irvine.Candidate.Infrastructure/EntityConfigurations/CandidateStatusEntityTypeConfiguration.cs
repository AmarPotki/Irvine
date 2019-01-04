using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations
{
    public class CandidateStatusEntityTypeConfiguration : IEntityTypeConfiguration<CandidateStatus>
    {
        public void Configure(EntityTypeBuilder<CandidateStatus> agentStatusBuilder)
        {
            agentStatusBuilder.ToTable("candidatestatus", CandidateContext.DEFAULT_SCHEMA);

            agentStatusBuilder.HasKey(a => a.Id);

            agentStatusBuilder.Property(a => a.Id)
                .HasDefaultValue(1)
                .ValueGeneratedNever()
                .IsRequired();

            agentStatusBuilder.Property(a => a.Name)
                .HasMaxLength(200)
                .IsRequired();
        }
    }
}