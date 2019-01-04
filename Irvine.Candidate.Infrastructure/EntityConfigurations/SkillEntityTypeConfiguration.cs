using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations{
    public class SkillEntityTypeConfiguration : IEntityTypeConfiguration<Skill>
    {
        public void Configure(EntityTypeBuilder<Skill> builder)
        {
            builder.ToTable("skill", CandidateContext.DEFAULT_SCHEMA);
            builder.HasKey(l => l.Id);
            builder.Property(l => l.Id).ForSqlServerUseSequenceHiLo("skillseq", CandidateContext.DEFAULT_SCHEMA);
            builder.Property(l => l.Name).IsRequired();
            builder.Ignore(l => l.DomainEvents);
        }
    }
}