using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
using Irvine.SeedWork.Domain;

namespace Irvine.Agent.Infrastructure.Repositories{
    public class ProviderRepository : IProviderRepository{
        private readonly CandidateContext _candidateContext;
        public ProviderRepository(CandidateContext candidateContext){
            _candidateContext = candidateContext ?? throw new ArgumentNullException(nameof(candidateContext));
        }
        public IUnitOfWork UnitOfWork => _candidateContext;
        public Provider Add(Provider provider){
            return _candidateContext.Providers.Add(provider).Entity;
        }
        public async Task<Provider> FindAsync(string identityGuid){
            return await _candidateContext.Providers.FirstOrDefaultAsync(x => x.IdentityGuid == identityGuid);
        }
    }
}