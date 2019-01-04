using System.Collections.Generic;
using System.Threading.Tasks;
using Irvine.SeedWork.Domain;

namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate
{
    public interface ICandidateRepository : IRepository<Candidate>
    {
        Task<Candidate> FindAsync(string candidateIdentityGuid);
        Task<Candidate> FindAsync(int id);
        Task<IEnumerable<int>> GetCandidateIdsByIdentityIds(IEnumerable<string> identityIds);
        Candidate Add(Candidate candidate);
        Skill AddSkill(Skill skill);
    }
}