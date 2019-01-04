using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations
{
    public class ExperienceEntityTypeConfiguration : IEntityTypeConfiguration<Experience>
    {
        public void Configure(EntityTypeBuilder<Experience> builder)
        {
            builder.ToTable("experiences", CandidateContext.DEFAULT_SCHEMA);

            builder.HasKey(e => e.Id);

            builder.Ignore(b => b.DomainEvents);

            builder.Property(e => e.Id).ForSqlServerUseSequenceHiLo("experienceseq", CandidateContext.DEFAULT_SCHEMA);

            builder.Property<int>("TypeId").IsRequired();
            builder.HasOne(e => e.Type).WithMany().HasForeignKey("TypeId");
           
        }
    }
}