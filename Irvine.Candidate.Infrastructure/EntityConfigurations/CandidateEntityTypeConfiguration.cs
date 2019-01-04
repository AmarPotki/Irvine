using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
namespace Irvine.Agent.Infrastructure.EntityConfigurations
{
    public class CandidateEntityTypeConfiguration : IEntityTypeConfiguration<Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate>
    {
        public void Configure(EntityTypeBuilder<Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate> builder)
        {
            builder.ToTable("candidates", CandidateContext.DEFAULT_SCHEMA);

            builder.HasKey(b => b.Id);

            builder.Ignore(b => b.DomainEvents);
            builder.Property<DateTimeOffset?>("StartTime");
            builder.Property<DateTimeOffset?>("PrescreeningLastVerified");

            builder.Property(b => b.Id)
                .ForSqlServerUseSequenceHiLo("candidateseq", CandidateContext.DEFAULT_SCHEMA);

            builder.Property(a => a.Name).IsRequired();
            builder.Property(a => a.LastName).IsRequired();

            var experienceNavigation =
                builder.Metadata.FindNavigation(nameof(Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate.Experiences));
            experienceNavigation.SetPropertyAccessMode(PropertyAccessMode.Field);

            builder.Property<int?>("LocationId").IsRequired(false);
            builder.HasOne(a => a.Location)
                .WithMany()
                .HasForeignKey("LocationId");
            builder.Property<int?>("LocationId").IsRequired(false);
            builder.HasOne(a => a.Location)
                .WithMany()
                .HasForeignKey("LocationId"); 

            builder.Property<int>("CandidateStatusId").IsRequired();
            builder.HasOne(a => a.CandidateStatus)
                .WithMany()
                .HasForeignKey("CandidateStatusId");

            builder.OwnsOne(o => o.Rate);

            var navigation = builder.Metadata.FindNavigation(nameof(Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate.Experiences));
            navigation.SetPropertyAccessMode(PropertyAccessMode.Field);
       

        }
    }
}