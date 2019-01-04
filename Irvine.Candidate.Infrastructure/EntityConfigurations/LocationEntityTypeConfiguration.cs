using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations{
    public class LocationEntityTypeConfiguration : IEntityTypeConfiguration<Location>{
        public void Configure(EntityTypeBuilder<Location> builder){
            builder.ToTable("location", CandidateContext.DEFAULT_SCHEMA);
            builder.HasKey(l => l.Id);
            builder.Property(l => l.Id).ForSqlServerUseSequenceHiLo("locationseq", CandidateContext.DEFAULT_SCHEMA);
            builder.Ignore(l => l.DomainEvents);
        }
    }
}