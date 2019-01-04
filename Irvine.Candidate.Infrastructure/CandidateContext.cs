using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
using Irvine.Agent.Infrastructure.EntityConfigurations;
using Irvine.SeedWork.Domain;
using BuildingBlocks.Infrastructure.Services.Idempotency.EntityConfigurations;
using BuildingBlocks.Infrastructure.Services.Mediator;

namespace Irvine.Agent.Infrastructure
{
    public class CandidateContext : DbContext, IUnitOfWork{
        public const string DEFAULT_SCHEMA = "candidate";
        private readonly IMediator _mediator;
        private CandidateContext(DbContextOptions<CandidateContext> options) : base(options){ }
        public CandidateContext(DbContextOptions<CandidateContext> options, IMediator mediator) : base(options){
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            Debug.WriteLine("CandidateContext::ctor ->" + GetHashCode());
        }
        public DbSet<Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate> Candidates { get; set; }
      //  public DbSet<Job> Jobs { get; set; }
        public DbSet<CandidateStatus> CandidateStatus { get; set; }
        public DbSet<ExperienceType> ExperienceTypes { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Provider> Providers{ get; set; }
        public DbSet<Skill> Skills{ get; set; }
        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken)){
            await _mediator.DispatchDomainEventsAsync(this);
            var result = await SaveChangesAsync();
            return true;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.ApplyConfiguration(new ClientRequestEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new CandidateEntityTypeConfiguration());
            //  modelBuilder.ApplyConfiguration(new JobEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new CandidateStatusEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ExperienceEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ExperienceTypeEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new LocationEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new SkillEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ProviderEntityTypeConfiguration());

            modelBuilder.Entity<CandidateSkill>()
                .HasKey(t => new { t.CandidateId, t.SkillId });
            modelBuilder.Entity<CandidateSkill>()
                .HasOne(pt => pt.Candidate)
                .WithMany("CandidateSkills");
            modelBuilder.Entity<CandidateSkill>()
                .HasOne(pt => pt.Skill)
                .WithMany("CandidateSkills");
        }
    }
    public class CandidateContextDesignFactory : IDesignTimeDbContextFactory<CandidateContext>
    {
        public CandidateContext CreateDbContext(string[] args){
            var optionsBuilder = new DbContextOptionsBuilder<CandidateContext>()
                .UseSqlServer("Server=.;Initial Catalog=Irvine.Services.CandidateDb;Integrated Security=true");
            return new CandidateContext(optionsBuilder.Options, new NoMediator());
        }
        private class NoMediator : IMediator{
            public Task Publish<TNotification>(TNotification notification,
                CancellationToken cancellationToken = default(CancellationToken)) where TNotification : INotification{
                return Task.CompletedTask;
            }

            public Task Publish(object notification, CancellationToken cancellationToken = default(CancellationToken))
            {
                throw new NotImplementedException();
            }

            public Task<TResponse> Send<TResponse>(IRequest<TResponse> request,
                CancellationToken cancellationToken = default(CancellationToken)){
                return Task.FromResult(default(TResponse));
            }
            public Task Send(IRequest request, CancellationToken cancellationToken = default(CancellationToken)){
                return Task.CompletedTask;
            }
        }
    }
}