using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations{
    public class ExperienceTypeEntityTypeConfiguration : IEntityTypeConfiguration<ExperienceType>{
        public void Configure(EntityTypeBuilder<ExperienceType> builder){
            builder.ToTable("experiencetypes", CandidateContext.DEFAULT_SCHEMA);
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Id)
                .HasDefaultValue(1)
                .ValueGeneratedNever()
                .IsRequired();
            builder.Property(e => e.Name)
                .HasMaxLength(200)
                .IsRequired();
        }
    }
}