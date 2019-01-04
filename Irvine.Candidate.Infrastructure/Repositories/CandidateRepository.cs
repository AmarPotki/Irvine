using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
using Irvine.SeedWork.Domain;

namespace Irvine.Agent.Infrastructure.Repositories{
    public class CandidateRepository: ICandidateRepository
    {
        private readonly CandidateContext _candidateContext;
        public CandidateRepository(CandidateContext candidateContext){
            _candidateContext = candidateContext ?? throw new ArgumentNullException(nameof(candidateContext)); ;
        }
           public IUnitOfWork UnitOfWork => _candidateContext;
        public Task<Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate> FindAsync(string candidateIdentityGuid){
            throw new System.NotImplementedException();
        }
        public Task<Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate> FindAsync(int id){
            throw new System.NotImplementedException();
        }
        public Task<IEnumerable<int>> GetCandidateIdsByIdentityIds(IEnumerable<string> identityIds){
            throw new System.NotImplementedException();
        }
        public Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate Add(Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate.Candidate candidate){
           return _candidateContext.Candidates.Add(candidate).Entity;

        }
        public Skill AddSkill(Skill skill){
            return _candidateContext.Skills.Add(skill).Entity;

        }
    }
}