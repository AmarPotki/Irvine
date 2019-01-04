using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations{
    public class ProviderEntityTypeConfiguration : IEntityTypeConfiguration<Provider>
    {
        public void Configure(EntityTypeBuilder<Provider> builder)
        {
            builder.ToTable("provider", CandidateContext.DEFAULT_SCHEMA);
            builder.HasKey(l => l.Id);
            builder.Property(l => l.Id).ForSqlServerUseSequenceHiLo("providerseq", CandidateContext.DEFAULT_SCHEMA);
            builder.Property(l => l.Name).IsRequired();
            builder.Ignore(l => l.DomainEvents);
            builder.Property(b => b.IdentityGuid)
                .HasMaxLength(200)
                .IsRequired();

            builder.HasIndex("IdentityGuid")
                .IsUnique();
        }
    }
}