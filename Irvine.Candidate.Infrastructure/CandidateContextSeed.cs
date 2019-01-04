using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Polly;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
namespace Irvine.Agent.Infrastructure
{
    public class CandidateContextSeed
    {
        public async Task SeedAsync(CandidateContext context, IHostingEnvironment env,
            ILogger<CandidateContextSeed> logger)
        {
            var policy = CreatePolicy(logger, nameof(CandidateContext));

            await policy.ExecuteAsync(async () =>
            {
                using (context)
                {
                    if (!context.Providers.Any())
                    {
                        context.Providers.AddRange(GetProvider());
                    }

                    if (!context.CandidateStatus.Any())
                    {
                        context.CandidateStatus.AddRange(GetPredefienedCandidateStatus());
                    }

                    if (!context.ExperienceTypes.Any())
                    {
                        context.ExperienceTypes.AddRange(GetPredefinedExperienceTypes());
                    }

                    if (!context.Locations.Any())
                    {
                        context.Locations.AddRange(GetPredefinedLocations());
                    }

                    await context.SaveChangesAsync();
                }
            });
        }

        private IEnumerable<Provider> GetProvider()
        {
            var result = new List<Provider>
            {
                new Provider("0942e23f-91db-468a-9d4c-b078b1fca80a","TestUser1"),
                new Provider("610e3228-11a8-4776-902c-19560b2ba733","TestUser2"),
                new Provider("b35fe8e0-8eb5-4766-856e-ba7a35a7e1c9","TestUser3"),
                new Provider("c42f505e-a43c-4951-ac85-37b8e0b9d952","TestUser4")
            };
            return result;
        }

        private IEnumerable<CandidateStatus> GetPredefienedCandidateStatus()
        {
            yield return CandidateStatus.Free;
            yield return CandidateStatus.SelectedForJob;
            yield return CandidateStatus.AcceptedJob;
        }

        private IEnumerable<ExperienceType> GetPredefinedExperienceTypes()
        {
            yield return ExperienceType.MedicalDevice;
            yield return ExperienceType.ManufacturingEngineer;
            yield return ExperienceType.QualityEngineer;
            yield return ExperienceType.ValidationEngineer;
        }

        public IEnumerable<Location> GetPredefinedLocations()
        {
            yield return new Location("CA", "Orange", "Irvine");
            yield return new Location("CA", "Orange", "Newport Beach");
            yield return new Location("CA", "Orange", "Dana Point");
            yield return new Location("CA", "Orange", "Corona del mar");
        }

        private Policy CreatePolicy(ILogger<CandidateContextSeed> logger, string prefix, int retries = 7)
        {
            return Policy.Handle<SqlException>().WaitAndRetryAsync(
                retryCount: retries,
                sleepDurationProvider: retry => TimeSpan.FromSeconds(5),
                onRetry: (exception, timespan, retry, ctx) =>
                {
                    logger.LogTrace(
                        $"[{prefix}] Exception {exception.GetType().Name} with message ${exception.Message} detected on attempt {retry} of {retries}");
                }
            );
        }
    }
}